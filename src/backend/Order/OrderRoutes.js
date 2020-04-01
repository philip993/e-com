const express = require("express");
const router = express.Router();

const orderController = require("./OrderController");

router.get("/", orderController.getOrders);
router.post("/", orderController.newOrder);
router.delete("/", orderController.deleteAllOrders);
router.get("/:id", orderController.getOneOrder);

module.exports = router;
