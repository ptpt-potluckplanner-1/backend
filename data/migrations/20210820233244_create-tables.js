exports.up = function (knex) {
  return knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username").notNullable().unique();
      users.string("password").notNullable();
      users.boolean("organizer").notNullable();
    })
    .createTable("potlucks", (potlucks) => {
      potlucks.increments("potluck_id");
      potlucks.string("title").notNullable();
      potlucks.string("date").notNullable();
      potlucks.string("time").notNullable();
      potlucks.string("location").notNullable();
      potlucks
        .integer("organizer_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("potluck-guest-item", (items) => {
      items.increments();
      items
        .integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potluck_id")
        .inTable("potlucks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      items
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      items.string("item");
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("potluck-guest-item")
    .dropTableIfExists("potlucks")
    .dropTableIfExists("users");
};
