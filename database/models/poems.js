const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const PoemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  pages: {
    type: Number,
    minlength: 1,
    maxlength: 500,
    required: true,
  }
});


// Compile model from schema

module.exports = mongoose.model('poems', PoemSchema);

