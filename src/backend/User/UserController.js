const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(stripeSecretKey);

const { User } = require("./UserModel");

exports.newUser = async (req, res) => {
  const customer = await stripe.customers.create({
    address: {
      line1: req.body.address,
      city: req.body.city,
      country: req.body.country,
      postal_code: req.body.postalCode,
    },
    email: req.body.email,
    name: req.body.firstName + " " + req.body.lastName,
    phone: req.body.phone,
    shipping: {
      address: {
        line1: req.body.address,
        city: req.body.city,
        country: req.body.country,
        postal_code: req.body.postalCode,
      },
      name: req.body.firstName + " " + req.body.lastName,
      phone: req.body.phone,
    },
  });

  await bcryptjs
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: hash,
        age: req.body.age,
        gender: req.body.gender,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        postalCode: req.body.postalCode,
        customerId: customer.id,
      });

      user
        .save()
        .then((user) => {
          res.status(201).json({
            user,
            customer,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Syster Error. Cannot create User right now!",
          });
          console.log(err);
        });
    })
    .catch((err) => {
      res.status(500).json({
        err: console.log(err),
      });
    });
};

exports.postLoging = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "AUTH FAILED",
        });
      }
      return bcryptjs.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: "AUTH FAILED",
        });
      }
      const token = jwt.sign(
        { email: result.email, userId: result._id },
        "testqweqweq8w3483jfjdsf32434dsfw34",
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({
        token: token,
      });
    })
    .catch((err) => {
      res.status(401).json({
        message: "WRONG CREDENTIALS",
      });
    });
};

exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).json({
        users: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Syster Error. Cannot create User right now!",
      });
      console.log(err);
    });
};

exports.getProfile = (req, res) => {
  User.findOne({ email: req.params.email })
    .then((user) => {
      res.status(200).json({
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          age: user.age,
          gender: user.gender,
          phone: user.phone,
          address: user.address,
          city: user.city,
          country: user.country,
          postalCode: user.postalCode,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "System Error!",
      });
      console.log(err);
    });
};

exports.getUserInfo = (req, res) => {
  User.findOne({ email: req.params.email })
    .then((selectedUser) => {
      res.status(200).json({
        selectedUser: {
          _id: selectedUser._id,
          firstName: selectedUser.firstName,
          lastName: selectedUser.lastName,
          email: selectedUser.email,
          phone: selectedUser.phone,
          address: selectedUser.address,
          city: selectedUser.city,
          country: selectedUser.country,
          postalCode: selectedUser.postalCode,
          customerId: selectedUser.customerId,
          role: selectedUser.role,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
      });
      console.log(err);
    });
};
