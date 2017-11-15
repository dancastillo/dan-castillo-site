const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    image: {
        type: String,
        Required: 'Image url is required!'
    }
});

module.exports = mongoose.model('Skills', SkillSchema);