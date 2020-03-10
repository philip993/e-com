const express = require("express");
const router = express.Router();

const stripeController = require("./CheckoutController");

router.post("/", stripeController.makePayment);

module.exports = router;
