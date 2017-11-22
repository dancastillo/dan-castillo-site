const mongoose = require('mongoose');
const Project = mongoose.model('Projects');

exports.get_all_projects = (req, res) => {
  Project.find({}, (err, projects) => {
    if(err) 
      res.send(err);
    
      res.json(projects)
  });
};