const router = require("express").Router();

const Potlucks = require("../potluck/potluck-model");

// {to go in item router} organizer can create a list of items for people to bring

// get all potlucks

router.get("/", (req, res, next) => {
  Potlucks.findAll()
    .then((potlucks) => {
      res.status(200).json(potlucks);
    })
    .catch((err) => {
      console.log(err);
      next({ errorMessage: "There was a server error (allptlks)" });
    });
});

// get specific potlucks by id

router.get("/:id", (req, res, next) => {
  Potlucks.findByPotluckId(req.params.id)
    .then((potluck) => {
      res.status(200).json(potluck);
    })
    .catch((err) => {
      console.log(err);
      next({ errorMessage: "There was a server error (allptlkbyid)" });
    });
});

module.exports = router;
