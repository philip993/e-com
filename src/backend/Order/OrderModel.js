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
      },
      skuId: {
        type: String
      }
    }
  ],
  stripeOrderId: {
    type: String
  },
  name: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  postalCode: {
    type: String
  },
  status: {
    type: String
  },
  customerId: {
    type: String
  }
});

const Order = mongoose.model("Order", orderSchema);
exports.Order = Order;
