const express = require("express");
const router = express.Router();

const cartController = require("./CartController");

router.post("/", cartController.postNewCartItem);
router.get("/", cartController.getCartItem);
router.put("/:title", cartController.updateCartItem);
router.delete("/", cartController.deleteAllCartItems);

module.exports = router;
