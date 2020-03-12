const { Order } = require("./OrderModel");

exports.newOrder = (req, res) => {
  const order = new Order({
    userIds: req.body.userIds,
    cart: req.body.cart
  });

  order
    .save()
    .then(order => {
      res.status(200).json({
        order
      });
    })
    .catch(err => {
      res.status(500).json({
        err
      });
      console.log(err);
    });
};

exports.getOrders = (req, res) => {
  Order.find({})
    .populate("userIds", "username")
    .populate("cartItems")
    .then(orders => {
      res.status(200).json({
        orders
      });
    })
    .catch(err => {
      res.status(500).json({
        err
      });
      console.log(err);
    });
};

exports.deleteAllOrders = (req, res) => {
  Order.deleteMany()
    .then(deletedOrders => {
      res.status(200).json({
        deletedOrders
      });
    })
    .catch(err => {
      res.status(500).json({
        err
      });
    });
};
