exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        { username: "admin", password: "test", organizer: true },
        { username: "glados", password: "thecakeisalie", organizer: false },
        { username: "leroy", password: "chicken", organizer: false },
      ]);
    });
};
