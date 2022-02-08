const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('promise-mysql');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const helmet = require('helmet');

const config = require(path.join(__dirname,'config.js'));
const api = require(path.join(__dirname,'api.js'));

const pool = mysql.createPool(config.pool);
console.log("imam bazen");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'dist/usmjeri')));


app.use(function (req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
  next();
});

app.use(morgan('dev'));
const apiRouter = api(express,pool);
app.use('/api',apiRouter);

app.get('/ante',(req,res) => {
  res.json({'penis':'penis'});
})



app.get('*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/usmjeri/'})
);


app.listen(config.port);
console.log(config.port);


