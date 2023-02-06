const router = require('express').Router()
const axios = require('axios')

// fetch all businesses based on location
// endpoint: /api/yelp
router.get('/', async (req, res) => {
  const location = req.headers.location
  const allStoresAPI = `https://api.yelp.com/v3/businesses/search?location=${location}&term=milk+tea&radius=10000&sort_by=best_match&limit=20`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  }
  const fetchSingleStore = await axios
    .get(allStoresAPI, options)
    .then((allStores) => {
      res.json(allStores.data)
    })
    .catch((err) => {
      console.error(err)
    })
  fetchSingleStore
})

// fetch specific details of a single store
router.get('/store/:id', async (req, res) => {
  const id = req.params.id
  const singleStoreDetailsAPI = `https://api.yelp.com/v3/businesses/${id}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  }
  const response = await axios
    .get(singleStoreDetailsAPI, options)
    .then((singleStore) => {
      res.json(singleStore.data)
    })
    .catch((err) => {
      console.error(err)
    })
  response
})

// get yelp reviews of a single store
router.get('/reviews/:id', async (req, res) => {
  const id = req.params.id
  const yelpReviewsAPI = `https://api.yelp.com/v3/businesses/${id}/reviews?limit=20&sort_by=yelp_sort`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  }

  const response = await axios
    .get(yelpReviewsAPI, options)
    .then((yelpReviews) => {
      res.json(yelpReviews.data)
    })
    .catch((err) => {
      console.error(err)
    })
  response
})

module.exports = router
