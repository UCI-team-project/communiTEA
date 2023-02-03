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

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer vS6Jx8XbtA3xq0cYn9s--SOFHtlDBRsgMu2b2GjLBMOnr2XvcTcoNTpFLcR6E9Gov1OTWlTXda6CprgUGD9hdmIyqFIUI3SHPsyTuwim7hfHy5NYCFJz-rI7yDl9Y3Yx',
  },
}

app.get('/api/yelp', async (req, res) => {
  const response = await axios
    .get(
      'https://api.yelp.com/v3/businesses/search?location=90703&term=boba&radius=1000&sort_by=best_match&limit=20',
      options
    )
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
