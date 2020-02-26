const { Wishlist } = require("./WishlistModel");

exports.getWishlistItems = (req, res) => {
  Wishlist.find({})
    .populate("wishlistItemId")
    .exec()
    .then(items => {
      res.status(200).json({
        items: items
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
      console.log(error);
    });
};

exports.newWishlistItem = (req, res) => {
  const wishlistItem = new Wishlist({
    wishlistItemId: req.body.wishlistItemId
  });

  wishlistItem
    .save()
    .then(item => {
      res.status(201).json({
        item: item
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
      console.log(error);
    });
};
