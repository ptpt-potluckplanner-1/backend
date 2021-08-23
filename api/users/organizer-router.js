const router = require("express").Router();

const Potlucks = require("../potluck/potluck-model");

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
router.post("/potluck", (req, res, next) => {
  ///
});

//delete potluck
router.delete("/potluck/:id", (req, res, next) => {
  ///
});

//update potluck
router.put("/potluck/:id", (req, res, next) => {
  ///
});

module.exports = router;
