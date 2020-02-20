const { Book } = require("./BookModel");

exports.getBooks = (req, res) => {
  Book.find({})
    .then(books => {
      res.status(200).json({
        books: books
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "System error. Books not available."
      });
    });
};

exports.postBook = (req, res) => {
  const book = new Book({
    title: req.body.title,
    writter: req.body.writter,
    genre: req.body.genre,
    year: req.body.year,
    price: req.body.price,
    quantity: req.body.quantity
  });

  book
    .save()
    .then(book => {
      res.status(200).json({
        book: book
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "System Error. Can not create new Book."
      });
    });
};
