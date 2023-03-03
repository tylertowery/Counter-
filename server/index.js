const express = require('express');
const router = require('./routes.js');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use('/api', router);

const PORT = process.env.PORT || 3005;

app.listen(PORT)
console.log(`Listening at http://localhost:${PORT}`);