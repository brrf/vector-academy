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
  res.header ('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.header ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
});

app.use(express.static('public'));


app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.get('/faqs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'faqs.html'));
})

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
})

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
app.listen(process.env.PORT || 3001, function () {
  console.log("Listening on port " + process.env.PORT);
});
