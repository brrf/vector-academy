'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.use(helmet());

require('dotenv').config();

//Express body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  // res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

app.use(express.static(path.join(__dirname, 'front-end', 'dev')));


app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, 'front-end', 'dev', 'index.html'));
});

app.get('/faqs', (req, res)=> {
  res.sendFile(path.join(__dirname, 'front-end', 'dev', 'faqs.html'));
});

app.get('/privacy', (req, res)=> {
  res.sendFile(path.join(__dirname, 'front-end', 'dev', 'privacy.html'));
});

app.get('/contact', (req, res)=> {
  res.sendFile(path.join(__dirname, 'front-end', 'dev', 'contact.html'));
});

app.get('/howitworks', (req, res)=> {
  res.sendFile(path.join(__dirname, 'front-end', 'dev', 'how-it-works.html'));
});

app.post('/contact', (req, res) => {
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
