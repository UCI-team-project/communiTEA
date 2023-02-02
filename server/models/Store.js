const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  reaction: {
    type: String,
    required: true,
  },
  by: [{
    type: Schema.Types.ObjectId,
    ref: "User",
  }],
})

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
  URL: {
    type: String,
    required: true,
  },
  photos: [{ type: String }],
  reactions: [reactionSchema],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }]
});

const Store = model("Store", storeSchema);

module.exports = Store;

