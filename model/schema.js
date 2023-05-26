const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }
  type Token {
    token: String!
  }
  input userInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    signupUser(userNew: userInput!): User
    createQuote(name: String): String
  }
`;

module.exports = typeDefs;
