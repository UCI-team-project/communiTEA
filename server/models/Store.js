const { Schema } = require('mongoose');
const reviewSchema = require('./Review');

const storeSchema = new Schema({
  storeId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  categories: [{ type : String }],
  yelpURL: {
    type: String,
    required: true,
  },
  ratings: [reviewSchema]
});

module.exports = storeSchema;

