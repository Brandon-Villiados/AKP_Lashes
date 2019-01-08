const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const mongoose = require('../database/index.js')
const router = require('./router.js');
const dotenv = require('dotenv').config();
const PORT = 80;
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
// console.log(process.env.GOOGLE_TOKEN);
app.use(morgan('combined'));
app.use(router);

app.get('/', function (req, res) {
  res.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
});

