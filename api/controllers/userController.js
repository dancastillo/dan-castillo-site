const mongoose = require('mongoose');
const User = mongoose.model('Users');

exports.get_all_users = (req, res) => {
  User.find({}, (err, users) => {
    if(err) 
      res.send(err);
    
      res.json(users)
  });
};