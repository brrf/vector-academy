'use strict';

const express = require('express');
const vhost = require('vhost');
const db = require('./db');
const cors = require('cors');

const server = require('./server.common.js');

const marketingApp = express();
const mainApp = express();

marketingApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

mainApp.use(cors({
    credentials: true, 
    origin: ['http://localhost:3000']
  }));

mainApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

//Virtual Routing Application
const commonApp = express();

commonApp.use(cors({
    credentials: true, 
    origin: ['http://localhost:8080', 'http://localhost:3000']
  }));

commonApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});




server(marketingApp, mainApp, commonApp, 'dev');

commonApp.use(vhost('localhost', marketingApp));
commonApp.use(vhost('apply.localhost', mainApp));

//404 Not Found Middleware
commonApp.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('End of the line!');
});


//Start server
commonApp.listen(3001, function () {
  console.log("Listening on port " + 3001);
});

try {
  db();
} catch {
  console.log('couldn\'t connect to database')
}