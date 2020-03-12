const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userIds: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  cart: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
      },
      title: {
        type: String
      },
      price: {
        type: Number
      }
    }
  ]
});

const Order = mongoose.model("Order", orderSchema);
exports.Order = Order;
