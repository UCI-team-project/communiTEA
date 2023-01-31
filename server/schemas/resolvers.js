const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    register: async (parent, { name, password }) => {
      const user = await User.create({ name, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { name, password }) => {
      const user = await User.findOne({ name });

      if (!user) {
        throw new AuthenticationError("No user with this name found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
