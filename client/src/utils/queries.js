import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
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
        storeId
        storeName
        storeURL
        username
        fullname
      }
    }
  }
`;

export const SINGLE_STORE = gql `
  query singleStore($store_id: ID!) {
    singleStore(store_id: $store_id) {
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
        storeId
        storeName
        storeURL
        username
        fullname
      }
    }
  }
`
