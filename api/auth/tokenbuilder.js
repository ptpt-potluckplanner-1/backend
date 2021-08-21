const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");

module.exports = function (user) {
  const payload = {
    sub: user.id,
    username: user.username,
    organizer: user.organizer,
  };
  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, jwtSecret, options);
};
