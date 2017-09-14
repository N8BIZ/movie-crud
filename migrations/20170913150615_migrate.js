
exports.up = function(knex, Promise) {
  return knex.schema.createTable("movie", function (table) {
    table.increments()
    table.text("Title")
    table.text("Director")
    table.integer("Year")
    table.integer("My_Rating")
    table.text("url")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("movie")
};
