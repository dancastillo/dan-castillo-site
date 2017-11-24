const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    Required: 'Project name is required!'
  },
  description: {
    type: String,
  },
  github: {
    type: String,
  },
  liveLink: {
    type: String,
  },
  technologies: {
    type: [String],
  }
});

module.exports = mongoose.model('Projects', ProjectSchema);