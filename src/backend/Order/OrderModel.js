const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userIds: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  cart: {
    type: Object,
    required: true
  }
});

const Order = mongoose.model("Order", orderSchema);
exports.Order = Order;
