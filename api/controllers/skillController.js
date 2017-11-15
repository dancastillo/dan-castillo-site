const mongoose = require('mongoose');
const Skill = mongoose.model('Skills');

exports.get_all_skills = (req, res) => {
  Skill.find({}, (err, users) => {
    if(err) 
      res.send(err);
    
      res.json(users)
  });
};