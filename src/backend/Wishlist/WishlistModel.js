const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  wishlistItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  }
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
exports.Wishlist = Wishlist;