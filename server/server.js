require('dotenv').config()

const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { join } = require('path')
const { authMiddleware } = require('./utils/auth.js')
const axios = require('axios')

const { typeDefs, resolvers } = require('./schemas')
const db = require('./config')

const PORT = process.env.PORT || 3001
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')))
}

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

app.get('/api/yelp', async (req, res) => {
  const location = req.headers.location
  // const searchQuery = req.headers.searchQuery

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }

  const yelpAPI = `https://api.yelp.com/v3/businesses/search?location=${location}&term=milk+tea&radius=10000&sort_by=best_match&limit=20`
  const response = await axios
    .get(yelpAPI, options)
    .then((response) => {
      console.log(response.data)
      res.json(response.data)
    })
    .catch((err) => {
      console.error(err)
    })

  response
})

// get yelp reviews of a single store
app.get('/api/yelp/reviews/:id', async (req, res) => {
  const id = req.params.id

  // const searchQuery = req.headers.searchQuery

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }

  const yelpAPI = `https://api.yelp.com/v3/businesses/${id}/reviews?limit=20&sort_by=yelp_sort`
  const response = await axios
    .get(yelpAPI, options)
    .then((response) => {
      console.log(response.data)
      res.json(response.data)
    })
    .catch((err) => {
      console.error(err)
    })

  response
})

app.get('/api/yelp/store/:id', async (req, res) => {
  const id = req.params.id

  // const searchQuery = req.headers.searchQuery

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }

  const yelpAPI = `https://api.yelp.com/v3/businesses/${id}`
  const response = await axios
    .get(yelpAPI, options)
    .then((response) => {
      console.log(response.data)
      res.json(response.data)
    })
    .catch((err) => {
      console.error(err)
    })

  response
})

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start()
  server.applyMiddleware({ app })

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`
        \n------------------------------------------
        \nAPI server running on port ${PORT}!
        \nUse GraphQL at http://localhost:${PORT}${server.graphqlPath}
        \n------------------------------------------`)
    })
  })
}

startApolloServer(typeDefs, resolvers)
