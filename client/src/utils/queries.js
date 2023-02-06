import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username 
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
        avg_rating
      }
      reviews {
        _id 
        content
        score
        createdAt
        store_id
        storeName
        storeURL
        username
        full_name
      }
    }
  }
`;

export const GET_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    getSingleUser(userId: $userId) {
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
        avg_rating
      }
      reviews {
        _id 
        content
        score
        createdAt
        store_id
        storeName
        storeURL
        username
        full_name
      }
    }
  }
`;

export const GET_ALL_STORES = gql`
  query getAllStores {
    getAllStores {
      _id
      storeId
      name
      price
      phone
      address
      categories
      yelpURL
      image 
      avg_rating
    }
  }
`

export const GET_STORE = gql `
  query getStore($storeId: String!) {
    getStore(storeId: $storeId) {
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
      avg_rating
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
`
