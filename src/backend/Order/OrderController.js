const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const { Order } = require("./OrderModel");
const stripe = require("stripe")(stripeSecretKey);

exports.newOrder = async (req, res) => {
  const cartBody = req.body;

  const order = await stripe.orders.create({
    currency: "usd",
    email: cartBody.email,
    items: cartBody.cart.map((item, index) => ({
      parent: item.skuId
    })),
    shipping: {
      name: cartBody.name,
      address: {
        line1: cartBody.address,
        city: cartBody.city,
        country: cartBody.country,
        postal_code: cartBody.postalCode
      },
      phone: cartBody.phone
    }
  });

  const orders = await new Order({
    userIds: req.body.userIds,
    cart: req.body.cart,
    stripeOrderId: order.id
  });

  orders
    .save()
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

exports.getOneOrder = (req, res) => {
  Order.findOne({ _id: req.params.id })
    .then(oneOrder => {
      res.status(200).json({
        oneOrder
      });
    })
    .catch(err => {
      res.status(500).json({
        err
      });
      console.log(err);
    });
};
