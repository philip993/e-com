const express = require("express");
const router = express.Router();

const cartController = require("./CartController");

router.post("/:email", cartController.postNewCartItem);
router.get("/:email", cartController.getCartItem);
router.put("/:title", cartController.updateCartItem);
router.delete("/:email", cartController.deleteAllCartItems);
router.delete("/:title", cartController.deleteOneCartItem);

module.exports = router;
