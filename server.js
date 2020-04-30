'use strict';

const express = require('express');
const vhost = require('vhost');
const cors = require('cors');
require('dotenv').config();

const mainAppServer = require('./main-app-server.js');
const employerAppServer = require('./employer-app-server.js');
const marketingAppServer = require('./marketing-app-server.js');

const marketingApp = express();
const mainApp = express();
const employerApp = express();

marketingApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', 'https://www.vectoracademy.io')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});


marketingApp.use(cors({
  credentials: true, 
  origin: ['https://localhost:3001', 'https://www.vectoracademy.io']
}));

mainApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', 'https://apply.vectoracademy.io')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

mainApp.use(cors({
  credentials: true, 
  origin: ['https://localhost:3002', 'https://apply.vectoracademy.io']
}));

employerApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', 'https://hire.vectoracademy.io')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

employerApp.use(cors({
  credentials: true, 
  origin: ['https://localhost:3003', 'https://apply.vectoracademy.io', 'https://hire.vectoracademy.io']
}));

mainAppServer(mainApp, 'dist');
marketingAppServer(marketingApp, 'dist');
employerAppServer(employerApp, 'dist');


//404 Not Found Middleware
marketingApp.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

mainApp.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

employerApp.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start server
marketingApp.listen(3001, function () {
  console.log("Listening on port " + 3001);
});

mainApp.listen(3002, function () {
  console.log("Listening on port " + 3002);
});

employerApp.listen(3003, function () {
  console.log("Listening on port " + 3003);
});

//ghost server
const ghost = express();
ghost.listen(2367, function() {
  console.log("Ghost listening on 2367")
});