const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('promise-mysql');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const helmet = require('helmet');

const config = require(path.join(__dirname, 'config.js'));
const auth = require(path.join(__dirname, 'auth.js'))
const api = require(path.join(__dirname, 'api.js'));

const pool = mysql.createPool(config.pool);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist/usmjeri')));

app.use(helmet())


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
    next();
});

app.use(morgan('dev'));

const authRouter = auth(express, pool, jwt, config.secret, crypto);
app.use('/auth', authRouter);

const apiRouter = api(express, pool, jwt, config.secret, crypto);
app.use('/api', apiRouter);


app.get('*', (req, res) => res.sendFile('index.html', {root: 'dist/usmjeri/'}));


app.listen(config.port);
console.log("port: "+config.port);
