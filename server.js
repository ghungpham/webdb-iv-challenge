const express = require('express');
const helmet = require('helmet')

const dish_router = require('./api/dish_router.js');


const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('<h1>API Running</h1>')
});

server.use('/api/', dish_router);


module.exports = server;