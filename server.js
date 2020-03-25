'use strict';

const express = require('express');
const vhost = require('vhost');
const db = require('./db');
const cors = require('cors');
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

//Virtual Routing Application
const commonApp = express();

commonApp.use(cors({
  credentials: true, 
  origin: ['https://localhost:3001', 'https://www.vectoracademy.io']
}));

commonApp.use(vhost('localhost', marketingApp));
commonApp.use(vhost('apply.localhost', mainApp));

server(marketingApp, mainApp, commonApp, 'dist');


//404 Not Found Middleware
commonApp.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start server
commonApp.listen(process.env.PORT || 3001, function () {
  console.log("Listening on port " + process.env.PORT);
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