const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  writter: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  itemIds: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wishlist"
  }
});

const Book = mongoose.model("Book", bookSchema);

exports.Book = Book;
