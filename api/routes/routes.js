const express = require('express');
const routes = express();

const Users = require('./../controllers/userController.js');

routes.get('/users', Users.get_all_users);

module.exports = routes;