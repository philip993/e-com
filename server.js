const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const stripe = require("stripe")(stripeSecretKey);

require("dotenv").config();

const books = require("./src/backend/Post/BookRoutes");
const users = require("./src/backend/User/UserRoutes.js");
const wishlist = require("./src/backend/Wishlist/WishlistRoutes");
const admin = require("./admin-bro/adminRoute");
const checkout = require("./src/backend/Checkout/CheckoutRoutes");
const order = require("./src/backend/Order/OrderRoutes");
const cart = require("./src/backend/Cart/CartRoutes");

mongoose
  .connect("mongodb://localhost/e-commerce", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB"));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, DELETE, POST, PATCH, PUT,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Request-With, Authorization, Origin, Accept, Content-Type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/books", books);
app.use("/users", users);
app.use("/wishlist", wishlist);
app.use("/admin", admin);
app.use("/checkout", checkout);
app.use("/orders", order);
app.use("/cartitems", cart);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));
