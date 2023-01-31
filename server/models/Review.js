const { Schema, model } = require('mongoose');


const reviewSchema = new Schema ({
  content: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  reaction: String,
  storeName: {
    type: String,
    required: true,
  },
  storeURL: {
    type:String,
  },
  reviewer: {
    type: Schema.Type.ObjectId,
    ref: "User"
  },
});

module.exports = reviewSchema;
