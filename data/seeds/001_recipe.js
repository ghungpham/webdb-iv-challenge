
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, recipe_name: 'Bolognese', dish_id: '1', description: 'Recipe here' },
        {id: 2, recipe_name: 'Cabonara', dish_id: '1', description: 'Recipe here' },
        {id: 3, recipe_name: 'Fish', dish_id: '2', description: 'Recipe here' },
        {id: 4, recipe_name: 'Lingua', dish_id: '2', description: 'Recipe here' },
        {id: 5, recipe_name: 'Basil Fried Rice', dish_id: '3', description: 'Recipe here' },
        {id: 6, recipe_name: 'Jollof Rice', dish_id: '3', description: 'Recipe here' },
      ]);
    });
};
