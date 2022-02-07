const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('promise-mysql');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const helmet = require('helmet');

const config = require('./config');

const pool = mysql.createPool(config.pool);


app.use(express.static('./dist/usmjeri'));
app.use(function (req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
  next();
});

app.use(morgan);

const apiRouter = require('./api/api')(express,pool);
app.use('/api',apiRouter);

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/usmjeri/'}),
);


app.listen(config.port);
console.log(config.port);


