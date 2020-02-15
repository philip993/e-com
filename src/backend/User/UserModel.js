const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // firstName: {
  //   type: String,
  //   // required: true,
  //   maxlength: 20,
  //   minlength: 2
  // },
  // lastName: {
  //   type: String,
  //   // required: true,
  //   minlength: 2,
  //   maxlength: 20
  // },
  email: {
    type: String,
    required: true,
    maxlength: 40
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  }
  // age: {
  //   type: Number,
  //   // required: true,
  //   max: 100,
  //   min: 0
  // },
  // city: {
  //   type: String,
  //   // required: true,
  //   minlength: 2,
  //   maxlength: 20
  // },
  // country: {
  //   type: String,
  //   required: true,
  //   minlength: 2,
  //   maxlength: 25
  // }
});

const User = mongoose.model("UserModel", UserSchema);
exports.User = User;
