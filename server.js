const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

const books = require("./src/backend/Post/BookRoutes");
const users = require("./src/backend/User/UserRoutes.js");
const wishlist = require("./src/backend/Wishlist/WishlistRoutes");

mongoose
  .connect("mongodb://localhost/e-commerce", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Could not connect to MongoDB"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT,OPTIONS");
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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on ${port}`));
