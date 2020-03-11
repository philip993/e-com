const express = require("express");
const router = express.Router();

const orderController = require("./OrderController");

router.get("/", orderController.getOrders);
router.post("/", orderController.newOrder);

module.exports = router;
