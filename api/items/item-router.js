const router = require("express").Router();

const Items = require("../items/items-model");

// POST add potluck item

router.post("/:id", (req, res, next) => {
  const potluckID = req.params.id;
  const newItem = req.body.item;
  Items.addItem(potluckID, newItem)
    .then((addedItem) => {
      res.status(201).json(addedItem);
    })
    .catch(next);
});

// GET potluck item by id

router.get("/:id", (req, res, next) => {
  const item_id = req.params.id;
  Items.findItemById(item_id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch(next);
});

// GET All items of a potluck

router.get("/:id/all", (req, res, next) => {
  const potluck_id = req.params.id;
  Items.findPotluckItems(potluck_id)
    .then((potluckItems) => {
      res.status(200).json(potluckItems);
    })
    .catch(next);
});

// POST guest claim item

router.post('/:id/claim"', (req, res, next) => {
  const potluck_id = req.params.id;

  const guest_id = req.body.guest_id;
  const item_id = req.body.item_id;

  Items.guestItemClaim(potluck_id, guest_id, item_id)
    .then((claimedItem) => {
      res.status(201).json(claimedItem);
    })
    .catch(next);
});
module.exports = router;
