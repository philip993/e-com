const express = require("express");
const router = express.Router();
const wishlistController = require("./WishlistController");

router.get("/", wishlistController.getWishlistItems);
router.post("/", wishlistController.newWishlistItem);
router.delete("/:id", wishlistController.deleteOneWishlistItem);
router.delete("/", wishlistController.deleteAllWishlistItems);

module.exports = router;
