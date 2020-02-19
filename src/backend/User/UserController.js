const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("./UserModel");

exports.newUser = (req, res) => {
  bcryptjs
    .hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: hash,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country
      });

      user
        .save()
        .then(user => {
          res.status(201).json({
            user: user
          });
        })
        .catch(err => {
          res.status(500).json({
            message: "Syster Error. Cannot create User right now!"
          });
          console.log(err);
        });
    })
    .catch(err => {
      res.status(500).json({
        err: console.log(err)
      });
    });
};

exports.postLoging = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "AUTH FAILED"
        });
      }
      return bcryptjs.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(404).json({
          message: "AUTH FAILED"
        });
      }
      const token = jwt.sign(
        { email: result.email, userId: result._id },
        "testqweqweq8w3483jfjdsf32434dsfw34",
        {
          expiresIn: "1h"
        }
      );
      res.status(200).json({
        token: token
      });
    })
    .catch(err => {
      res.status(401).json({
        message: "WRONG CREDENTIALS"
      });
    });
};

exports.getUsers = (req, res) => {
  User.find({})
    .then(users => {
      res.status(200).json({
        users: users
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Syster Error. Cannot create User right now!"
      });
      console.log(err);
    });
};

exports.getProfile = (req, res) => {
  User.findOne({ email: req.params.email })
    .then(user => {
      res.status(200).json({
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          age: user.age,
          gender: user.gender,
          address: user.address,
          city: user.city,
          country: user.country
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "System Error!"
      });
      console.log(err);
    });
};
