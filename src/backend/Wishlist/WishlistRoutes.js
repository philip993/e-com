const express = require("express");
const router = express.Router();
const wishlistController = require("./WishlistController");

router.get("/", wishlistController.getWishlistItems);
router.post("/", wishlistController.newWishlistItem);

module.exports = router;
