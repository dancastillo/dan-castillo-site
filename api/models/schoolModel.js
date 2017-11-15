const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  name: {
    type: String,
    Required: 'School name is required!'
  },
  abbreviation: {
    type: String,
  },
  degree: {
    type: String,
  },
  major: {
    type: String,
  },
  minor: {
    type: String,
  },
  gradYear: {
    type: String,
  }
});

module.exports = mongoose.model('Schools', SchoolSchema);