const { AuthenticationError } = require("apollo-server-express");
const { User, Store, Review } = require("../models");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = 
          await User.findOne({ _id: context.user._id })
                    .populate([{
                      path: "savedStores",
                      model: "Store",
                      populate: [{
                        path: "reviews",
                        model: "Review",
                      }]},
                      {
                        path: "reviews",
                        model: "Review"
                      }])
                      .select("-__v -password");
        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    getSingleUser: async ( parent, { userId }) => {
      const user = 
        await User.findById(userId)
                  .populate([{
                    path: "savedStores",
                    model: "Store",
                    populate: [{
                      path: "reviews",
                      model: "Review",
                    }]},
                    {
                      path: "reviews",
                      model: "Review"
                    }]);
      return user;
    },
    getAllStores: async (parent, args) => {
      const stores = await Store.find({}).populate("reactions.by reviews");
      return stores;
    },
    getStore: async (parent, { storeId }) => {
      const store = await Store.findOne({ storeId });
      return store.populate("reactions.by reviews");
    },
  },
  Mutation: {
    register: async (parent, { username, password, first_name, last_name }) => {
      const user = await User.create({ username, password, first_name, last_name });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user with this username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, { userData }, context) => {
      if (context.user) {
        // Allows user to update first name, last name, and description
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { ...userData },
          { new: true },
        );
        return user.populate("savedStores reviews");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addStore: async (parent, { storeData }) => {
      // Checks if store is already in DB
      let store = await Store.findOne({ storeId: storeData.storeId });

      // Creates new store if not in DB
      if (!store) {
        store = await Store.create(storeData);
      }
      return store.populate("reactions.by reviews");
    },
    favStore: async (parent, { store_id }, context) => {
      if (context.user) {
        // Add store to favorites
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedStores: store_id}},
          { new: true },
        )
        return user.populate("savedStores reviews"); 
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeStore: async (parent, { store_id }, context) => {
      if (context.user){
        // Remove store from favorites without deleting the store
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedStores: store_id }}, //storeId is _id 
          { new: true }
        )
        return user.populate("savedStores reviews");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addReaction: async (parent, { reaction, store_id }, context) => {
      if (context.user) {
        // Checks if user already reacted to the store
        let store = await Store.findOne(
          { 
            _id: store_id,
            "reactions.by": context.user._id
          });
        // If not, allow reaction
        if (!store) {
          // Check if reaction already exists 
          store = await Store.findOneAndUpdate(
            {
              _id: store_id,
              "reactions.reaction": reaction
            },
            { $push: { "reactions.$.by": context.user._id }},
            { new: true},
          );
          // If not, create new reaction object
          if (!store) {
            const reactionObj = {
              reaction: reaction,
              by: [ context.user._id ]
            };
            store = await Store.findByIdAndUpdate(
              store_id, 
              { $addToSet: { reactions: reactionObj }},
              { new: true },
            );
          };
          return store.populate("reactions.by reviews");
        }
        // throw error, if user already reacted to store
        throw new AuthenticationError("You can only react once!");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeReaction: async (parent, { store_id }, context) => {
      if (context.user) {
        // Removes user reaction on store
        const store = await Store.findOneAndUpdate(
          { 
            _id: store_id,
            "reactions.by": context.user._id
          },
          { $pull: { "reactions.$.by": context.user._id }},
          { new: true },
        );
        return store.populate("reactions.by reviews");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addReview: async (parent, { reviewEntry }, context) => {
      if (context.user) {
        // takes review content, score, store_id, storeName, storeURL, username, and full_name
        // creates review and update association with user and store
        const newReview = await Review.create({ ...reviewEntry, userId: context.user._id });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reviews: newReview._id }},
        );
        await Store.findByIdAndUpdate(
          reviewEntry.store_id,
          { $addToSet: { reviews: newReview._id }},
        );
        return newReview;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateReview: async (parent, { reviewId, content, score }, context) => {
      if (context.user) {
        // updates review content &/ score 
        const updateReview = await Review.findOneAndUpdate(
          { _id: reviewId, userId: context.user._id },
          { content, score },
          { new: true },
        );
        return updateReview;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeReview: async (parent, { reviewId }, context) => {
      if (context.user) {
        // Check if review exists
        const review = await Review.findById({ _id: reviewId });
        // If exists and is owner, remove associations first, then delete review
        if (review.userId === context.user_id) {
          const user = await User.findOneAndUpdate(
            { reviews: review._id },
            { $pull: { reviews: review._id }},
            { new: true },
          );
          await Store.findOneAndUpdate(
            { reviews: review._id},
            { $pull: { reviews: review._id }}
          );
          await review.deleteOne()
          return user.populate("savedStores reviews")
        };
        throw new AuthenticationError("Not owner of review!");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
