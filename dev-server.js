'use strict';

const express = require('express');
const vhost = require('vhost');
const db = require('./db');
const cors = require('cors');

const mainAppServer = require('./main-app-server.js');
const employerAppServer = require('./employer-app-server.js');
const marketingAppServer = require('./marketing-app-server.js');

const marketingApp = express();
const mainApp = express();
const employerApp = express();

marketingApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

marketingApp.use(cors({
    credentials: true, 
    origin: ['http://localhost:8080', 'http://localhost:3000']
  }));

mainApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', 'http://localhost:3002')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

mainApp.use(cors({
    credentials: true, 
    origin: ['http://localhost:3000', 'http://localhost:8080']
  }));

employerApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', 'http://localhost:3003')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

employerApp.use(cors({
    credentials: true, 
    origin: ['http://localhost:3000', 'http://localhost:8080']
  }));

//Virtual Routing Application
// const commonApp = express();

// commonApp.use ((req, res, next) => {
//   res.header ('Access-Control-Allow-Origin', '*')
//   res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
//   res.header ('Access-Control-Allow-Credentials', true)
//   res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
//   next()
// });

mainAppServer(mainApp, 'dev');
employerAppServer(employerApp, 'dev');
marketingAppServer(marketingApp, 'dev');

// commonApp.use(vhost('localhost', marketingApp));
// commonApp.use(vhost('apply.localhost', mainApp));

//404 Not Found Middleware
marketingApp.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('End of the line!');
});

mainApp.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('End of the line!');
});

employerApp.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('End of the line!');
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

try {
  db();
} catch {
  console.log('couldn\'t connect to database')
}