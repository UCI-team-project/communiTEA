import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $password: String!
    $first_name: String!
    $last_name: String!
  ) {
    register(
      username: $username
      password: $password
      first_name: $first_name
      last_name: $last_name
    ) {
      token
      user {
        _id
        username
        password
        full_name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        password
        full_name
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: ID!, $userData: userInput!) {
    updateUser(userId: $userId, userData: $userData) {
      _id
      username
      password
      first_name
      last_name
      full_name
      description
    }
  }
`;

export const ADD_STORE = gql`
  mutation addStore($storeData: storeInput!) {
    addStore(storeData: $storeData) {
      _id
      storeId
      name
      price
      phone
      address
      categories
      yelpURL
      image
      photos
    }
  }
`;

export const FAV_STORE = gql`
  mutation favStore($store_id: ID!) {
    favStore(store_id: $store_id) {
      _id
      username
      password
      first_name
      last_name
      full_name
      description
      savedStores {
        _id
        storeId
        name
        price
        phone
        address
        categories
        yelpURL
        image
        photos
      }
      reviews {
        _id
        content
        score
        createdAt
        store_id
        storeName
        storeURL
        userId
        username
        full_name
      }
    }
  }
`;

export const REMOVE_STORE = gql`
  mutation removeStore($store_id: ID!) {
    removeStore(store_id: $store_id) {
      _id
      username
      password
      first_name
      last_name
      full_name
      description
      savedStores {
        _id
        storeId
        name
        price
        phone
        address
        categories
        yelpURL
        image
        photos
      }
      reviews {
        _id
        content
        score
        createdAt
        store_id
        storeName
        storeURL
        userId
        username
        full_name
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($reaction: String!, $store_id: ID!) {
    addReaction(reaction: $reaction, store_id: $store_id) {
      _id
      storeId
      name
      price
      phone
      address
      categories
      yelpURL
      image
      photos
      reactions {
        reaction
        by {
          username
          full_name
        }
      }
      reviews {
        _id
        content
        score
        createdAt
        store_id
        storeName
        storeURL
        userId
        username
        full_name
      }
    }
  }
`;

export const REMOVE_REACTION = gql`
  mutation removeReaction($store_id: ID!) {
    removeReaction(store_id: $store_id) {
      _id
      storeId
      name
      price
      phone
      address
      categories
      yelpURL
      image
      photos
      reactions {
        reaction
        by {
          username
          full_name
        }
      }
      reviews {
        _id
        content
        score
        createdAt
        store_id
        storeName
        storeURL
        userId
        username
        full_name
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($reviewEntry: reviewInput!) {
    addReview(reviewEntry: $reviewEntry) {
      _id
      content
      score
      createdAt
      store_id
      storeName
      storeURL
      userId
      username
      full_name
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation updateReview($reviewId: ID!, $content: String, $score: Float) {
    updateReview(reviewId: $reviewId, content: $content, score: $score) {
      _id
      content
      score
      createdAt
      store_id
      storeName
      storeURL
      userId
      username
      full_name
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($reviewId: ID!) {
    removeReview(reviewId: $reviewId) {
      _id
      username
      password
      first_name
      last_name
      full_name
      description
      savedStores {
        _id
        storeId
        name
        price
        phone
        address
        categories
        yelpURL
        image
        photos
      }
      reviews {
        _id
        content
        score
        createdAt
        store_id
        storeName
        storeURL
        userId
        username
        full_name
      }
    }
  }
`;
