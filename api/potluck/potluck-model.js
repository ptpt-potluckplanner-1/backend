const db = require("../../data/dbConfig");

// get all potlucks that an organizer has created

function findAllOrgPotlucks(id) {
  db("potlucks").select("*").where({ organizer_id: id });
}

//get all potlucks that a user is attending.

async function findAllUserPotlucks(id) {
  return await db("potluck-guest-item")
    .join("potlucks", "potluck-guest-item.potluck_id", "potlucks.potluck_id")
    .select(
      "potlucks.title",
      "potlucks.date",
      "potlucks.time",
      "potlucks.location"
    )
    .where({ guest_id: id });
}

//get all potlucks

function findAll() {
  return db("potlucks");
}

// find potluck by id

function findByPotluckId(id) {
  return db("potlucks as P")
    .select("P.potluck_id", "P.title", "P.date", "P.time", "P.location")
    .where("P.potluck_id", id)
    .first();
}

// Organizer can create a potluck with
// name, date, time, location

async function addPotluck(potluck) {
  const [id] = await db("potlucks").insert(potluck);
  return findByPotluckId(id);
}

//organizer can edit the potluck details.

async function updatePotluck(id, potluck) {
  await db("potlucks").where({ potluck_id: id }).update(potluck);
  return findByPotluckId(id);
}

async function removePotluck(id) {
  const deletedPotluck = await findByPotluckId(id);

  await db("potlucks").where({ potluck_id: id }).del();
  return deletedPotluck;
}

module.exports = {
  findAll,
  findAllOrgPotlucks,
  findAllUserPotlucks,
  findByPotluckId,
  addPotluck,
  updatePotluck,
  removePotluck,
};
