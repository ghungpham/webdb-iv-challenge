
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('dish', function(tbl) {
      tbl.increments();
      tbl
      .string('dish_name', 120)
      .notNullable()
      .unique();
  })
  .createTable('recipe', function(tbl){
      tbl.increments();
      tbl
      .string('recipe_name', 150)
      .notNullable()
      .unique();
      tbl
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dish')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl
      .string('description', 1500)
      .notNullable();
  })
    .createTable('ingredient', function(tbl) {
      tbl.increments();
      tbl
      .string('ingr_name', 120)
      .notNullable()
      .unique()
  })
    .createTable('recipes_ingredients', function(tbl) {
      tbl.increments();
      tbl
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dish')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredient')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl
      .float('quantity')
      .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingedient')
    .dropTableIfExists('recipe')
    .dropTableIfExists('dish')
};

// CREATE TABLE dish (
// 	id integer PRIMARY KEY AUTOINCREMENT,
// 	name varchar
// );

// CREATE TABLE recipe (
// 	id integer PRIMARY KEY AUTOINCREMENT,
// 	name varchar,
// 	dish_id integer,
// 	description varchar
// );

// CREATE TABLE ingredients (
// 	id integer PRIMARY KEY AUTOINCREMENT,
// 	name varchar
// );

// CREATE TABLE recipes_ingredients (
// 	id integer PRIMARY KEY AUTOINCREMENT,
// 	recipe_id integer,
// 	ingredient_id integer,
// 	quantity float
// );

// CREATE TABLE get_cooking (
// 	id integer PRIMARY KEY AUTOINCREMENT,
// 	dish_id integer,
// 	recipe_id integer,
// 	recipes_ingredient integer,
// 	quantity float
// );

