'use strict';

const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const authentication = require('./routes/authentication.js');

module.exports = function(marketingApp, mainApp, environment) {
	//marketing Site
	marketingApp.use(express.static(path.join(__dirname, 'marketing-app', environment)));

	marketingApp.get('/', (req, res)=> {
	  res.sendFile(path.join(__dirname, 'marketing-app', environment, 'index.html'));
	});

	marketingApp.get('/faqs', (req, res)=> {
	  res.sendFile(path.join(__dirname, 'marketing-app', environment, 'faqs.html'));
	});

	marketingApp.get('/privacy', (req, res)=> {
	  res.sendFile(path.join(__dirname, 'marketing-app', environment, 'privacy.html'));
	});

	marketingApp.get('/contact', (req, res)=> {
	  res.sendFile(path.join(__dirname, 'marketing-app', environment, 'contact.html'));
	});

	marketingApp.get('/howitworks', (req, res)=> {
	  res.sendFile(path.join(__dirname, 'marketing-app', environment, 'how-it-works.html'));
	});

	marketingApp.get('/timeline', (req, res)=> {
	  res.sendFile(path.join(__dirname, 'marketing-app', environment, 'timeline.html'));
	});

	marketingApp.get('/landingpage', (req, res)=> {
	  res.sendFile(path.join(__dirname, 'marketing-app', environment, 'landing-page.html'));
	});

	marketingApp.get('/thankyou', (req, res)=> {
	  res.sendFile(path.join(__dirname, 'marketing-app', environment, 'thank-you.html'));
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
	});

	//marketingApp routes
	authentication(marketingApp);

	//mainApp routes

	mainApp.get('/', (req, res)=> {
	  res.send('hello there');
	});
}