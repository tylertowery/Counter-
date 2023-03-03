const express = require('express');
const models = require('./models');

module.exports = {
  getHighScore: (req, res) => {
    models.listHighScores()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(400).send(error.stack);
      });
  },

  getMyScores: (req, res) => {
    console.log('body: ', req.body);
    console.log('params', req.params);
    console.log('query: ', req.query);
    models.listUserScores(req.body)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(400).send(error.stack);
      });
  },

  checkLogin: (req, res) => {
    console.log('request: ', req);
    console.log('params: ', req.params);
    console.log('body: ', req.body);
    console.log('query: ', req.query);
    models.userCredentials(req.query)
      .then((response) => {
        if (response.length > 0) {
          res.status(200).send(response);
        } else {
          res.status(400).send('username or password are incorrect')
        }
      })
      .catch((error) => {
        res.status(401).send(error.stack);
      });
  },

  postScore: (req, res) => {
    if (req.body.name.length === 0) {
      res.status(400).send('Cannot post score for Guest');
    } else {
      models.createScore(req.body)
      .then((response) => {
        res.status(201).send('Successfully posted score!');
      })
      .catch((error) => {
        res.status(401).send(error.stack);
      });
    }
  },

  createSignIn: (req, res) => {
    console.log(req.body);
    models.createCredentials(req.body)
      .then((response) => {
        res.status(201).send('completed signup!');
      })
      .catch((error) => {
        res.status(401).send(error.stack);
      });
  },

  deleteData: (req, res) => {
    models.deleteDB()
      .then((response) => {
        res.status(200).send('deleted stuff');
      })
      .catch((error) => {
        res.status(400).send(error.stack);
      });
  },
}