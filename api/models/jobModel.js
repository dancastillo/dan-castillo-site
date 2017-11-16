const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  company: {
    type: String,
    Required: 'Company name is required!'
  },
  abbreviation: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: [String],
  }
});

module.exports = mongoose.model('Jobs', JobSchema);