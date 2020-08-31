const { Wishlist } = require("./WishlistModel");

exports.getWishlistItems = (req, res) => {
  Wishlist.find({})
    .populate("wishlistItemId")
    .populate("wishlistAuthor", "_id, username")
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
    });
};

exports.newWishlistItem = (req, res) => {
  const wishlistItem = new Wishlist({
    wishlistItemId: req.body.wishlistItemId,
    wishlistAuthor: req.body.wishlistAuthor
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
    });
};

exports.deleteOneWishlistItem = (req, res) => {
  Wishlist.deleteOne({ _id: req.params.id })
    .then(deletedItem => {
      res.status(200).json({
        deletedItem: deletedItem
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
      console.log(error);
    });
};

exports.deleteAllWishlistItems = (req, res) => {
  Wishlist.deleteMany({})
    .then(deletedItems => {
      res.status(200).json({
        deletedItems: deletedItems
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
      console.log(error);
    });
};
