const express = require("express");
const router = express.Router();
const BookController = require("./BookController");

router.get("/", BookController.getBooks);
router.post("/", BookController.postBook);

module.exports = router;
