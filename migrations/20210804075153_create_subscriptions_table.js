exports.up = function (knex) {
  return knex.schema.createTable("subscriptions", function (table) {
    table.string("id").notNullable().unique();
    table.string("user_id").notNullable();
  });
};

exports.down = function (knex) {};
