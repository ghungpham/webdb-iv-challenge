
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {dish_id: 3 , recipe_id: 6 , ingredient_id: 1 , quantity: 3 },
        {dish_id: 3 , recipe_id: 5 , ingredient_id: 1 , quantity: 3.5 },
        {dish_id: 3 , recipe_id: 6 , ingredient_id: 3 , quantity: .05 },
        {dish_id: 1 , recipe_id: 1 , ingredient_id: 8 , quantity: 400 },
        {dish_id: 1 , recipe_id: 2 , ingredient_id: 7 , quantity: 5 },
        {dish_id: 2 , recipe_id: 4 , ingredient_id: 1 , quantity: 3 },
        {dish_id: 2 , recipe_id: 3 , ingredient_id: 5 , quantity: 1 },
      ]);
    });
};
