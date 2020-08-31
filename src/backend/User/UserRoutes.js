const express = require("express");
const router = express.Router();
const UserController = require("./UserController");

router.get("/", UserController.getUsers);
router.post("/register", UserController.newUser);
router.post("/login", UserController.postLoging);
router.get("/profile/:email", UserController.getProfile);
router.get("/:email", UserController.getUserInfo);

module.exports = router;
