exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("uid").notNullable();
  });
};

exports.down = function (knex) {};
