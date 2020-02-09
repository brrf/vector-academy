'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const vhost = require('vhost');
const db = require('./db');
const cors = require('cors');
const helmet = require('helmet');

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

server(marketingApp, mainApp, 'dev');

//Virtual Routing Application
const app = express();

app.use(helmet());

app.use(cors({
  credentials: true, 
  origin: ['http://localhost:8080', 'http://localhost:3000']
}));

app.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

//Express body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(vhost('localhost', marketingApp));
app.use(vhost('apply.localhost', mainApp));


//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('End of the line!');
});


//Start server
app.listen(3001, function () {
  console.log("Listening on port " + 3001);
});

//Connect to database
db();
