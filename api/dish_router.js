const router = require('express').Router();
const db = require('./dish_model')
module.exports = router;

router.get('/dishes', (req, res) => {
    db
    .getDishes()
    .then(dishes => {
        res.status(200).json(dishes);
    })
    .catch(err => {
        res.status(500).json({message: 'something went wrong'})
    })
})

router.get('/recipes', (req, res) => {
    db
    .getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json({message: 'something went wrong'})
    })
})

router.get('/dishes/:id', (req, res) => {
    const { id } = req.params;
    db
    .getDish(id)
    .then(dish =>{
        if (!dish){res.status(400).json({message: "action cannot be found"})
        } else {res.status(200).json(dish)} 
    })
    .catch(err => {
        res.status(500).json({message: "Sorry cannot be done"})
    })
})

router.post('/dishes', (req, res) => {
    const { dish_name } = req.body;
    db
    .addDish( {dish_name} )
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/recipes', (req, res) => {
    const { recipe_name, dish_id, description } = req.body;
    db
    .addRecipe( {recipe_name, dish_id, description} )
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        res.status(500).json(err)
    })
})