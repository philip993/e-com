const express = require("express");
const router = express.Router();
const wishlistController = require("./WishlistController");

router.get("/:user", wishlistController.getWishlistItems);
router.post("/:user", wishlistController.newWishlistItem);
router.delete("/:user", wishlistController.deleteAllWishlistItems);
router.delete("/:user/:id", wishlistController.deleteOneWishlistItem);

module.exports = router;
