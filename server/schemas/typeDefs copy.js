const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    first_name: String!
    last_name: String!
    full_name: String!
    description: String
    savedStores: [Store]
    reviews: [Review]
  }

  type Store {
    _id: ID!
    storeId: ID!
    name: String!
    price: String
    phone: String
    address: String!
    categories: [String]
    yelpURL: String!
    image: String!
    photos: [String]
    reactions: [Reaction]
    reviews: [Review]
    avg_rating: Float
  }

  type Reaction {
    reaction: String!
    by: [User]
  }

  type Review {
    _id: ID!
    content: String!
    score: Float!
    createdAt: String
    store_id: ID!
    storeName: String!
    storeURL: String!
    userId: ID!
    username: String!
    full_name: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input userInput {
    first_name: String
    last_name: String
    description: String
  }

  input storeInput {
    storeId: ID!
    name: String!
    price: String
    phone: String
    address: String
    categories: [String]
    yelpURL: String
    image: String
    photos: [String]
  }

  input reactionInput {
    reaction: String!
    by: [ID]
  }

  input reviewInput {
    content: String!
    score: Float!
    store_id: ID!
    storeName: String!
    storeURL: String!
    username: String!
    full_name: String!
  }

  type Query {
    me: User
    getSingleUser(userId: ID!): User
    getAllStores: [Store]
    getStore(storeId: String!): Store
  }

  type Mutation {
    register(
      username: String!
      password: String!
      first_name: String!
      last_name: String!
    ): Auth
    login(username: String!, password: String!): Auth
    updateUser(userData: userInput!): User
    addStore(storeData: storeInput!): Store
    favStore(store_id: ID!): User
    removeStore(store_id: ID!): User
    addReaction(reaction: String!, store_id: ID!): Store
    removeReaction(store_id: ID!): Store
    addReview(reviewEntry: reviewInput!): Review
    updateReview(reviewId: ID!, content: String, score: Float): Review
    removeReview(reviewId: ID!): User
  }
`;

module.exports = typeDefs;
