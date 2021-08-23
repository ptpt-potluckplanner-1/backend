const router = require("express").Router();

const Potlucks = require("../potluck/potluck-model");

// get all guest potlucks

router.get("/:id", (req, res, next) => {
  Potlucks.findAllUserPotlucks(req.params.id)
    .then((potlucks) => {
      res.status(200).json(potlucks);
    })
    .catch((err) => {
      console.log(err);
      next({ errorMessage: "There was a server error (allUsrpotlks)" });
    });
});

module.exports = router;
