const mongoose = require('mongoose');

const User = require('../../database/models/user');

module.exports = () => User.create({
  name: 'khuloud',
  nickname: 'khokha',
  email: 'khuloud@gmail.com',
  password: '123456',
  babyName: 'Yazan'
});


