const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const reviewSchema = new Schema ({
  content: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    max: [5, "score cannot be higher than 5."]
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  store_id: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  storeURL: {
    type:String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String, 
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  }
});

const Review = model("Review", reviewSchema);

module.exports = Review;
