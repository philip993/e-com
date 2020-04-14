const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
  },
  bookPrice: {
    type: Number,
  },
  bookQuantity: {
    type: Number,
  },
  total: {
    type: Number,
  },
  index: {
    type: String,
  },
  bookSKUid: {
    type: String,
  },
  currentUser: {
    type: String,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
exports.Cart = Cart;
