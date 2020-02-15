const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization(" ")[1];
    const decodedToken = jwt.verify(
      token,
      "testqweqweq8w3483jfjdsf32434dsfw34"
    );
    next();
  } catch (error) {
    res.status(401).json({
      message: "WRONG CREDENTIALS"
    });
  }
};
