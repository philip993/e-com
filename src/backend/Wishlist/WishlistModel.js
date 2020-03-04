const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  wishlistItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  },
  wishlistAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
exports.Wishlist = Wishlist;
