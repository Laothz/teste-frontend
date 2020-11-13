const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const developerController = require('./controllers/developer');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/cadastrar', developerController.save);
app.get('/getAllDevs', developerController.index);

module.exports = app;