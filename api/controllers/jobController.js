const mongoose = require('mongoose');
const Job = mongoose.model('Jobs');

exports.get_all_skills = (req, res) => {
  Job.find({}, (err, users) => {
    if(err) 
      res.send(err);
    
      res.json(users)
  });
};