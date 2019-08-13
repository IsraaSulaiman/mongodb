const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 12,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 15,
    required: true,
  },
  babyName: {
    type: String,
    required: false,
    trim: true,
  },
  nickname: {
    type: String,
    required: false,
    trim: true,
  }
});

// Compile model from schema

module.exports = mongoose.model('users', UserSchema);
