const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  savedStores: [{
    type: Schema.Types.ObjectId,
    ref: 'Store',
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }], 
}, {
  toJSON: {
    virtuals: true,
  }, 
  id: false,
});

userSchema.virtual("full_name").get(function() {
  return `${this.first_name} ${this.last_name}`;
})

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
