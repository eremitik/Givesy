exports.up = function (knex) {
  return knex.schema.createTable("subscriptions", function (table) {
    table.increments();
    table.string("stripe_id").notNullable();
    table.integer("user_id").notNullable().references("id").inTable("users");
  });
};

exports.down = function (knex) {};
