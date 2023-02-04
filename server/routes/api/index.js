const router = require('express').Router()
const yelpRoutes = require('./yelp')

router.use('/yelp', yelpRoutes)

module.exports = router
