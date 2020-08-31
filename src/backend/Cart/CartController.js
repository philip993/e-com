const { Cart } = require("./CartModel");

exports.postNewCartItem = (req, res) => {
  const cartItem = new Cart({
    bookTitle: req.body.bookTitle,
    bookPrice: req.body.bookPrice,
    bookQuantity: req.body.bookQuantity,
    total: req.body.total,
    bookSKUid: req.body.bookSKUid,
    currentUser: req.body.currentUser,
  });

  cartItem
    .save()
    .then((cartItem) => {
      res.status(201).json({
        cartItem,
      });
      console.log(cartItem);
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
      console.log(err);
    });
};

exports.getCartItem = (req, res) => {
  Cart.find({ currentUser: req.params.email })
    .then((cartItems) => {
      res.status(200).json({
        cartItems,
      });
      console.log(cartItems);
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
      console.log(err);
    });
};

exports.updateCartItem = (req, res) => {
  const cartItem = new Cart({
    _id: req.body._id,
    bookTitle: req.body.bookTitle,
    bookPrice: req.body.bookPrice,
    bookQuantity: req.body.bookQuantity,
    total: req.body.total,
    bookSKUid: req.body.bookSKUid,
    currentUser: req.body.currentUser,
  });

  Cart.findOneAndUpdate({ bookTitle: req.params.title }, cartItem)
    .then((updateItem) => {
      res.status(200).json({
        updateItem,
      });
      console.log(updateItem);
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
      console.log(err);
    });
};

exports.deleteAllCartItems = (req, res) => {
  Cart.deleteMany({ currentUser: req.params.email })
    .then((deletedItems) => {
      res.status(200).json({
        deletedItems,
      });
      console.log(deletedItems);
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
      console.log(err);
    });
};

exports.deleteOneCartItem = (req, res) => {
  Cart.findOneAndDelete({ bookTitle: req.params.title })
    .then((deletedItem) => {
      res.status(200).json({
        deletedItem,
      });
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
      console.log(err);
    });
};
