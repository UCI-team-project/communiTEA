const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reaction: {
    type: String,
    required: true,
  },
  by: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const storeSchema = new Schema(
  {
    storeId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: String,
    phone: String,
    address: {
      type: String,
      required: true,
    },
    categories: [{ type: String }],
    yelpURL: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    photos: [{ type: String }],
    reactions: [reactionSchema],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

storeSchema.virtual("avg_rating").get(function () {
  if (this.reviews.length === 0) {
    return null;
  }
  let sum = 0;
  this.reviews.forEach((review) => {
    sum += review.score;
  });
  const avg = sum / this.reviews.length;
  return avg;
});

const Store = model("Store", storeSchema);

module.exports = Store;
