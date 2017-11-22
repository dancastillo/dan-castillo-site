const express = require('express');
const routes = express();

const Users = require('./../controllers/userController.js');

const Skills = require('./../controllers/skillController.js');

const Schools = require('./../controllers/schoolController.js');

const Jobs = require('./../controllers/jobController.js');

const Projects = require('./../controllers/projectController.js');

routes.get('/users', Users.get_all_users);

routes.get('/skills', Skills.get_all_skills);

routes.get('/jobs', Jobs.get_all_skills);

routes.get('/schools', Schools.get_all_skills);

routes.get('/projects', Schools.get_all_projects);

module.exports = routes;