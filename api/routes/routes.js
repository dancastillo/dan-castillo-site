const express = require('express');
const routes = express();

const Users = require('./../controllers/userController.js');

const Skills = require('./../controllers/skillController.js');

const Schools = require('./../controllers/schoolController.js');

routes.get('/users', Users.get_all_users);

routes.get('/skills', Skills.get_all_skills);

routes.get('/schools', Schools.get_all_skills);

module.exports = routes;