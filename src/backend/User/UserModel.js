const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 25,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 25
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 25
  },
  email: {
    type: String,
    required: true,
    maxlength: 40,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  },
  role: {
    type: String,
    enum: ["super-admin", "admin", "restrictred"],
    default: "restrictred"
  },
  age: {
    type: Number,
    required: true,
    max: 100,
    min: 0
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"]
  },
  address: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 25
  },
  country: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 25
  },
  postalCode: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);
exports.User = User;
