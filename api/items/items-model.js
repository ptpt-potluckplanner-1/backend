const db = require("../../data/dbConfig");

async function addItem(potluck_id, item) {
  const newItem = { potluck_id: potluck_id, item: item };

  await db("items").insert(newItem);
}

function findItemById(item_id) {
  return db("items").select("item").where({ item_id }).first();
}

async function findPotluckItems(potluck_id) {
  return await db("potluck_items")
    .select("item")
    .where({ potluck_id: potluck_id });
}

module.exports = {
  addItem,
  findPotluckItems,
  findItemById,
};
