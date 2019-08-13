const setUsers = require('./setUsers');
const setPoems = require('./setPoems');
const connection = require('../../database/connection')

const mongoose = require('mongoose');


module.exports = () => new Promise(async (resolve, reject) => {
  try {

    // Open Connection to Mongo

    await connection();

    // Drop all Collections & documents

    mongoose.connection.collections.poems.drop();
    mongoose.connection.collections.users.drop();

    // Build collection & documents

    await Promise.all([setPoems(), setUsers()])

    resolve('done');

  } catch (error) {
    reject(error)
  }
});
