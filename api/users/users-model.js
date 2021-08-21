const db = require("../../data/dbConfig");

async function add(user) {
  const [id] = await db("users").insert(user);
  return findByUserId(id);
}
function findByUserId(id) {
  return db("users as U")
    .select("U.user_id", "U.username", "U.password")
    .where("U.user_id", id)
    .first();
}

function findBy(filter) {
  return db("users as U")
    .select("U.user_id", "U.username", "U.password")
    .where(filter);
}

module.exports = {
  add,
  findBy,
  findByUserId,
};
