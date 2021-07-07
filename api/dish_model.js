const db = require('../data/dbConfig.js')

module.exports = {getDishes, addDish, getDish, getRecipes, addRecipe};

function getDishes() {
    return db('dish')
}

function addDish(dish) {
    return db('dish')
        .insert(dish)
        .then(ids => ({ id: ids[0] }))
}
////why 0

function getDish(id) {
    return db('dish as d')
        .join('recipe as r', 'r.dish_id', 'd.id')
        .select('d.id', 'd.dish_name as dish', 'r.recipe_name' )
        .where('d.id', id )
    }

function getRecipes() {
    return db('recipe as r')
        .join('dish as d', 'r.dish_id', 'd.id')
        .select('r.id', 'r.recipe_name', 'd.dish_name as dish', 'r.description')
} 

function addRecipe(recipe) {
    return db('recipe')
    .insert(recipe)
    .then(ids => ({ id: ids[0] }))
}

