const express = require('express');

const userController = require('../controller/users');

const routes = express.Router();

routes.get('/', userController.getAllUsers);
routes.post('/', userController.createNewUsers);
routes.patch('/:idUser', userController.updateUsers);
routes.delete('/:idUser', userController.deleteUsers);

module.exports = routes;
