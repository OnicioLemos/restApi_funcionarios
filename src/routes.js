const express = require('express');
const routes = express.Router();

const FuncController = require('../controllers/FuncController');

routes.post('/funcionarios', FuncController.store);
routes.get('/funcionarios', FuncController.index);
routes.get('/funcionarios/:id', FuncController.indexOne);
routes.put('/funcionarios/:id', FuncController.put);
routes.delete('/funcionarios/:id', FuncController.delete);


module.exports = routes;