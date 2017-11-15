const mongoose = require('mongoose');
const School = mongoose.model('Schools');

exports.get_all_skills = (req, res) => {
  School.find({}, (err, users) => {
    if(err) 
      res.send(err);
    
      res.json(users)
  });
};