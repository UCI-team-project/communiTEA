# CommuniTEA

<!-- ![Screenshot of web app](./assets/images/homepage.png)
![Screenshot of web app](./assets/images/dashboard.png) -->

## Description

This web app lets users browse a wide selection of delicious milk tea businesses where they can view the reviews and also leave their own ratings.

Users are also able to add different businesses to their favorites list.

## Table of Contents

## User Stories

- [x] User can search a keyword or search for a business to review
- [x] User can create an account and login
- [x] User can leave reviews and rating for a business
- [x] User can add a business to their favorites list

## Technologies Used

- [x] JavaScript
- [x] React
- [x] MongoDB
- [x] Mongoose
- [x] GraphQL
- [x] Tailwind CSS
- [x] Material UI
- [x] Deployed on Heroku
- [x] Yelp Fusion API

## Usage

```
Enter a business to search up to view reviews
```

## Contributors

[Stephanie Tseng](https://github.com/wytseng)

[Darius Garcia](https://github.com/dariusgarcia/)

[Johnathan Nguyen](https://github.com/jthnguyen9909)

[Justin Chen](https://github.com/JustinCChen)

[Japbir Chhina](https://github.com/japchhina)

## Installation

clone the repo to local machine

```
cd communitea/
```

install dependencies

```
npm install
```

seed database

```
npm run seed
```

start development server

```
npm run develop
```

build app for production

```
npm run build
```

### Client

start client

```
cd client/
```

```
npm run start
```

### Server

start server

```
cd server/
```

```
npm run start
```

<!-- to be deleted  -->
# Note section

## Models:
```
User {
  _id
  username
  password 
  first_name
  last_name
  description
  savedStores: [Stores]
}

Store {
  storeId (yelp business id)
  name
  location
  ratings: [Rating]

  method {
    avgRating: avg(ratings.score)
  }
}

Rating {
  _id
  content
  reaction (emoji)
  score (out of 5, decimal allowed)
  user {
    _id
    username
    first_name
    last_name
  }
}
```