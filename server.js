'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const vhost = require('vhost');
const db = require('./db');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const server = require('./server.common.js');

const marketingApp = express();
const mainApp = express();

marketingApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', 'https://www.vectoracademy.io')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

server(marketingApp, mainApp, 'dist');

//Virtual Routing Application
const app = express();

app.use(helmet());

app.use(cors({
  credentials: true, 
  origin: ['https://localhost:3001', 'https://www.vectoracademy.io']
}));

//Express body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(vhost('localhost', marketingApp));
app.use(vhost('apply.localhost', mainApp));

//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});


//Connect to database
try {
  db();
} catch {
  console.log('couldn\'t connect to database')
}

//ghost server
const ghost = express();
ghost.listen(2367, function() {
  console.log("Ghost listening on 2367")
});