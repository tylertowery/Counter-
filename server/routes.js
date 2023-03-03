const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

// npm joy for verification
// add in security layer
// add in encryption on front-end

// GET calls
// http://localhost:3005/api/highscores
// returns list of the 25 highest scores
router.get('/highscores', controllers.getHighScore);
// http://localhost:3005/api/myscores -> req.body = {name: "tyler"}
// returns list of all users scores
router.get('/myscores', controllers.getMyScores);
// http://localhost:3005/api/login -> req.params = {login: "tyler", password: "password"}
// returns if login credentials are accepted
router.get('/login', controllers.checkLogin);

// POST calls
// http://localhost:3005/api/score -> req.body = {name: "tyler", score: 4}
// creates score data to database
router.post('/score', controllers.postScore);
// http://localhost:3005/api/signup -> req.body = {login: "tyler", password: "password"}
// creates a unique username
router.post('/signup', controllers.createSignIn);

// DELETE calls
// http://localhost:3005/api/delete
// deletes all the stuff in the database
router.delete('/delete', controllers.deleteData)

module.exports = router;
// Authentication: {username: tyler, password: github}
// Firebase ^
