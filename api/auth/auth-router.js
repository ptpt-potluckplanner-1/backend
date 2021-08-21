const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res, next) => {
  let newUser = req.body;

  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(newUser.password, rounds);

  newUser.password = hash;

  Users.add(newUser)
    .then((addedUser) => {
      res.status(201).json(addedUser);
    })
    .catch(next);
});

// router.post("/login", checkAuthPayload, (req, res, next) => {
//   let { username, password } = req.body;

//   Users.findBy({ username })
//     .then(([user]) => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         const token = tokenBuilder(user);

//         res.status(200).json({
//           message: `welcome, ${user.username}!`,
//           token,
//         });
//       } else {
//         next({ status: 401, message: "invalid Credentials" });
//       }
//     })
//     .catch(next);
// });

module.exports = router;
