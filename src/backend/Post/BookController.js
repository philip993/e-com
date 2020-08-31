const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripeSecretKey);
const { Book } = require("./BookModel");

exports.getBooks = async (req, res) => {
  const currentpage = +req.query.page;
  const pageSize = +req.query.pagesize;
  const bookQuery = Book.find();
  const pageLimit = 10;

  const count = await Book.countDocuments();
  const totalPages = Math.ceil(count / pageLimit);

  if (currentpage && pageSize) {
    bookQuery.skip(pageSize * (currentpage - 1)).limit(pageSize);
  }

  await bookQuery
    .find({})
    .limit(pageSize)
    .sort(req.query.param)
    .then((books) => {
      res.status(200).json({
        books,
        totalPages,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "System error. Books not available.",
      });
    });
};

exports.postBook = async (req, res) => {
  const product = await stripe.products.create({
    name: req.body.title,
    type: "good",
    description: "Details from book",
    attributes: ["genre", "year", "writter"],
  });

  const sku = await stripe.skus.create({
    attributes: {
      writter: req.body.writter,
      genre: req.body.genre,
      year: req.body.year,
    },
    price: req.body.price * 100,
    currency: "usd",
    inventory: {
      type: "finite",
      quantity: req.body.quantity,
    },
    product: product.id,
  });

  const book = new Book({
    title: req.body.title,
    writter: req.body.writter,
    genre: req.body.genre,
    year: req.body.year,
    price: req.body.price,
    quantity: req.body.quantity,
    skuId: sku.id,
  });

  book
    .save()
    .then((book) => {
      res.status(200).json({
        book,
        product,
        sku,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "System Error. Can not create new Book.",
      });
    });
};
