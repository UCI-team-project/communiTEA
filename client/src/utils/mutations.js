import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($name: String!, $password: String!) {
    register(name: $name, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;
