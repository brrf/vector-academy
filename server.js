'use strict';

const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

app.use(helmet());


app.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

app.use(express.static('public'));

// app.get('/', (req, res)=> {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});


//Start server
app.listen(3001, function () {
  console.log("Listening on port " + 3001);
});
