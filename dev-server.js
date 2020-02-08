'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const nodemailer = require('nodemailer');
const vhost = require('vhost');
const db = require('./db');
const cors = require('cors');


const authentication = require('./routes/authentication.js');

//marketing Site
const marketingApp = express();

require('dotenv').config();

marketingApp.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  // res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

marketingApp.use(express.static(path.join(__dirname, 'marketing-app', 'dev')));


marketingApp.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, 'marketing-app', 'dev', 'index.html'));
});

marketingApp.get('/faqs', (req, res)=> {
  res.sendFile(path.join(__dirname, 'marketing-app', 'dev', 'faqs.html'));
});

marketingApp.get('/privacy', (req, res)=> {
  res.sendFile(path.join(__dirname, 'marketing-app', 'dev', 'privacy.html'));
});

marketingApp.get('/contact', (req, res)=> {
  res.sendFile(path.join(__dirname, 'marketing-app', 'dev', 'contact.html'));
});

marketingApp.get('/howitworks', (req, res)=> {
  res.sendFile(path.join(__dirname, 'marketing-app', 'dev', 'how-it-works.html'));
});

marketingApp.get('/timeline', (req, res)=> {
  res.sendFile(path.join(__dirname, 'marketing-app', 'dev', 'timeline.html'));
});

marketingApp.post('/contact', (req, res) => {
  //validate input items
  if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.message) {
    return res.json({err: 'Fill out all form fields'});
  }
  //send email to vector
  let transport = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    auth: {
       user: process.env.ZOHOUSER,
       pass: process.env.ZOHOPASS
    }
  });
  const message = {
    from: 'moshe@vectortrainingacademy.com', // Sender address
    to: 'moshe@vectortrainingacademy.com',         // List of recipients
    subject: `Message from: ${req.body.firstName} ${req.body.lastName}`, // Subject line
    text: `Reply to ${req.body.email}. Message: ${req.body.message}` // Plain text body
  };
  transport.sendMail(message, function(err, info) {
      if (err) {
        res.json({err})
      } else {
        res.json({err: false})
      }
  });
})

authentication(marketingApp);

//mainApp

const mainApp = express();

// mainApp.use(express.static(path.join(__dirname, 'marketing-app', 'dev')));


mainApp.get('/', (req, res)=> {
  res.send('hello there');
});

//mainApp routes
authentication(mainApp);

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
