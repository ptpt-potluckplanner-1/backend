const User = require("../models/user-model");

const checkUsernameAvailable = (req, res, next) => {
  const { username } = req.body;

  User.findUserBy({ username })
    .first()
    .then((user) => {
      if (user) {
        res.status(422).json({ message: "Username is taken" });
      } else {
        next();
      }
    });
};

const checkAuthPayload = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    next({ status: 401, message: "Username and password required" });
  } else {
    next();
  }
};

module.exports = { checkUsernameAvailable, checkAuthPayload };
