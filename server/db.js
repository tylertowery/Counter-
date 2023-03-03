const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/counter';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  login: {type: String, unique: true},
  password: String,
});

const scoreSchema = new mongoose.Schema({
  name: String,
  score: Number,
});

const User = mongoose.model('User', userSchema);

const Score = mongoose.model('Score', scoreSchema);


db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports.db = db;
module.exports.User = User;
module.exports.Score = Score;