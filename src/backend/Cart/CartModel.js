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
});

const Cart = mongoose.model("Cart", cartSchema);
exports.Cart = Cart;
