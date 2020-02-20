const { Book } = require("./BookModel");

exports.getBooks = (req, res) => {
  const currentpage = +req.query.page;
  const pageSize = +req.query.pagesize;
  const bookQuery = Book.find();

  if (currentpage && pageSize) {
    bookQuery.skip(pageSize * (currentpage - 1)).limit(pageSize);
  }

  bookQuery
    .find({})
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
