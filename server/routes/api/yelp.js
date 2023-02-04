const router = require('express').Router()
const axios = require('axios')

// fetch all businesses based on location
router.get('/', async (req, res) => {
  const location = req.headers.location
  const yelpAPI = `https://api.yelp.com/v3/businesses/search?location=${location}&term=milk+tea&radius=10000&sort_by=best_match&limit=20`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }
  const fetchSingleStore = await axios
    .get(yelpAPI, options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
  fetchSingleStore
})

// get yelp reviews of a single store
router.get('/reviews/:id', async (req, res) => {
  const id = req.params.id
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
      res.json(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
  response
})

// fetch specific details of a single store
router.get('/store/:id', async (req, res) => {
  const id = req.params.id
  const yelpAPI = `https://api.yelp.com/v3/businesses/${id}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }
  const response = await axios
    .get(yelpAPI, options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      console.error(err)
    })

  response
})

module.exports = router
