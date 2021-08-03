exports.up = function (knex) {
  return knex.schema.createTable("test_table", function (table) {
    table.increments();
    table.text("content").notNullable();
  }); 
};

exports.down = function (knex) { };