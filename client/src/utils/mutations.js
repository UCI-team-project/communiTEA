import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($username: String!, $password: String!, $first_name: String!, $last_name: String!) {
    register(username: $username, password: $password, first_name: $first_name, last_name: $last_name) {
      token
      user {
        _id
        username
        password
        first_name
        last_name
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
        first_name
        last_name
        full_name
        description
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
  mutation addStore( $storeData: storeInput!) {
    addStore(storeData: $storeData) {
      _id
      storeId
      name
      address
      categories
      URL 
      photos
    }
  }
`;

export const FAV_STORE = gql`
  mutation favStore($userId: ID!, $store_id: ID!) {
    favStore(userId: $userId, store_id: $store_id) {
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
        address
        categories
        URL 
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
`

export const REMOVE_STORE = gql`
  mutation removeStore($userId: ID!, $store_id: ID!) {
    removeStore(userId: $userId, store_id: $store_id){
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
        address
        categories
        URL 
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
  mutation addReaction($reaction: String!, $userId: ID!, $store_id: ID!) {
    addReaction(reaction: $reaction, userId: $userId, store_id: $store_id) {
      _id
      storeId
      name
      address
      categories
      URL
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
  mutation removeReaction($userId: ID!, $store_id: ID!) {
    removeReaction(userId: $userId, store_id: $store_id) {
      _id
      storeId
      name
      address
      categories
      URL
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

export const UPDATE_REVIEW = gql `
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
  mutation removeReview($userId: ID!, $reviewId: ID!) {
    removeReview(userId: $userId, reviewId: $reviewId) {
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
        address
        categories
        URL 
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
`

