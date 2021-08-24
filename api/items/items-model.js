const db = require("../../data/dbConfig");

async function addItem(potluck_id, item) {
  const newItem = { potluck_id: potluck_id, item: item };

  const [id] = await db("potluck_items").insert(newItem);

  return findItemById(id);
}

function findItemById(item_id) {
  return db("potluck_items").select("item").where({ item_id }).first();
}

async function findPotluckItems(potluck_id) {
  return await db("potluck_items")
    .select("item")
    .where({ potluck_id: potluck_id });
}

// need function for guest claiming item.

async function guestItemClaim(potluck_id, guest_id, item_id) {
  const claimedItem = {
    potluck_id: potluck_id,
    guest_id: guest_id,
    item_id: item_id,
  };

  await db("potluck-guest-item").insert(claimedItem);

  return findItemById(id);
}

module.exports = {
  addItem,
  findPotluckItems,
  findItemById,
  guestItemClaim,
};
