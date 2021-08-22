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
    .createTable("potluck_items", (items) => {
      items.increments("potluck_item_id");
      items
        .integer("potluck_id")
        .notNullable()
        .unsigned()
        .references("potluck_id")
        .inTable("potlucks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      items.string("item").notNullable();
    })
    .createTable("potluck-guest-item", (guestItems) => {
      guestItems.increments();
      guestItems
        .integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potluck_id")
        .inTable("potlucks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      guestItems
        .integer("guest_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      guestItems
        .integer("item_id")
        .unsigned()
        .notNullable()
        .references("item_id")
        .inTable("potluck_items")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("potluck-guest-item")
    .dropTableIfExists("potluck_items")
    .dropTableIfExists("potlucks")
    .dropTableIfExists("users");
};
