const router = require("express").Router();

const Potlucks = require("../potluck/potluck-model");
const restricted = require("../middleware/restricted");

router.get("/:id", (req, res, next) => {
  Potlucks.findAllOrgPotlucks(req.params.id)
    .then((potlucks) => {
      res.status(200).json(potlucks);
    })
    .catch((err) => {
      console.log(err);
      next({ errorMessage: "There was a server error (allOrgpotlks)" });
    });
});

//create potluck
router.post("/potluck", restricted, (req, res, next) => {
  ///

  Potlucks.addPotluck(req.body)
    .then((addedPotluck) => {
      res.status(201).json(addedPotluck);
    })
    .catch(next);
});

//delete potluck
router.delete("/potluck/:id", restricted, (req, res, next) => {
  ///
  const potluck_id = req.params.id;

  Potlucks.removePotluck(potluck_id)
    .then((deletedPotluck) => {
      res.status(200).json(deletedPotluck);
    })
    .catch(next);
});

//update potluck
router.put("/potluck/:id", restricted, (req, res, next) => {
  ///
  const potluck_id = req.params.id;

  Potlucks.updatePotluck(potluck_id, req.body)
    .then((updatedPotluck) => {
      res.status(200).json(updatedPotluck);
    })
    .catch(next);
});

module.exports = router;
