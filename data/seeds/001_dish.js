
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 1, dish_name: 'Pasta'},
        {id: 2, dish_name: 'Taco'},
        {id: 3, dish_name: 'Rice'},
      ]);
    });
};
