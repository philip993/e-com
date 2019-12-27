const express = require("express");
const router = express.Router();
const booksCtrl = require("../controller/books");

router.get("/", booksCtrl.getBooks);
router.post("/", booksCtrl.postBook);

module.exports = router;
