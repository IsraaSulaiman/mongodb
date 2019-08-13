var mongoose = require('mongoose');
require('dotenv').config();

//ES6 Promises
mongoose.Promise = global.Promise;

let mongo_URI = process.env.MONGODB_DEVELOPMENT_URI;

if (process.env.NODE_ENV === 'test') {
  mongo_URI = process.env.MONGODB_TEST_URI;
}

if (process.env.NODE_ENV === 'production') {
  mongo_URI = process.env.MONGODB_PRODUCTION_URI;
}

if (!mongo_URI) {
  console.log('No Mongodb URI is found!');
}

//Set up default mongoose connection

mongoose.connect(mongo_URI, { useMongoClient: true });

//Get the default connection
var db = () => mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = db;