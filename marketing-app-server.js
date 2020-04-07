'use strict';

const express = require('express');
const path = require('path');
require('dotenv').config();
const flash = require('connect-flash');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const session = require("express-session");
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const multer  = require('multer');
const sendEmail = require('./utils/send-email');

const Student = require('./schemas/students');

const authentication = require('./routes/authentication.js');

module.exports = function(marketingApp, environment) {

	marketingApp.use(helmet());

	//cookie parser
	marketingApp.use(cookieParser());

	//Express body parser
	marketingApp.use(bodyParser.json());
	marketingApp.use(bodyParser.urlencoded({ extended: false }));


	//marketing site routes
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
	  sendEmail('moshe@vectortrainingacademy.com', 'moshe@vectortrainingacademy.com', `Message from: ${req.body.firstName} ${req.body.lastName}`, `Reply to ${req.body.email}. Message: ${req.body.message}`);
	});

	authentication(marketingApp);

	// //access db
	// mongoose.connect(process.env.MONGO_URI, {
	// 	useNewUrlParser: true, 
	// 	useUnifiedTopology: true
	// });

	// //express session
	// marketingApp.use(
	//   session({
	//     secret: "secret",
	//     resave: true,
	//     saveUninitialized: true,
	//     proxy: true,
	//     cookie: { secure: false },
	//     store: new MongoStore({
	//     	mongooseConnection: mongoose.connection
	//     })
	//   })
	// );
};