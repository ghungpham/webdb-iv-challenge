
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {ingr_name: 'cup of long grain white rice'},
        {ingr_name: 'cups of chopped tomatoes'},
        {ingr_name: 'cups of soy sauce'},
        {ingr_name: 'filet tilapias'},
        {ingr_name: 'cups of chopped lingua'},
        {ingr_name: 'eggs'},
        {ingr_name: 'ounces of butter'},
        {ingr_name: 'grams of ground beef'},
      ]);
    });
};
