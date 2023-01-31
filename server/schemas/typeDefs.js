const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    register(name: String!, password: String!): Auth
    login(name: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
