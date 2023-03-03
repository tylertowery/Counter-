const mongoose = require('mongoose');
const { User, Score } = require('./db.js')

const listHighScores = () => {
  return Score.find({}).sort('score').limit(25);
};

const listUserScores = (request) => {
  return Score.find(request).sort('score');
};

const userCredentials = (request) => {
  return User.find(request);
};

const createScore = (request) => {
  return Score.insertMany(request);
};


const createCredentials = (request) => {
  return User.insertMany(request);
};

const deleteDB = () => {
  return User.deleteMany({})
    .then((response) => {
      return Score.deleteMany({});
    })
    .catch((error) => {
      console.log(error.stack);
    });
}

module.exports.listHighScores = listHighScores;
module.exports.listUserScores = listUserScores;
module.exports.createScore = createScore;
module.exports.userCredentials = userCredentials;
module.exports.createCredentials = createCredentials;
module.exports.deleteDB = deleteDB;