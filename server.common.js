'use strict';

const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
const passport = require('passport');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const session = require("express-session");

const User = require('./schemas/users');

const authentication = require('./routes/authentication.js');

module.exports = function(marketingApp, mainApp, commonApp, environment) {

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

	mainApp.use(express.static(path.join(__dirname, 'main-app', 'build')));

	mainApp.get('/', (req, res)=> {
  		res.sendFile(path.join(__dirname, 'main-app', 'build', 'index.html'));
	});

	mainApp.get('/user', async (req, res) => {
		console.log(req.user);
		res.json({user: req.user})
	});

	//expression session
	mainApp.use(
	  session({
	    secret: "secret",
	    resave: true,
	    saveUninitialized: true,
	    proxy: true,
	    cookie: { secure: false }
	  })
	);

	// Passport config
	require('./config/passport')(passport);

	//Passport Middleware
	mainApp.use(passport.initialize());
	mainApp.use(passport.session());

	mainApp.post('/studentlogin', passport.authenticate('local'), async (req, res) => {
		let errors = [];
		//const success = 'We will be opening student registration soon. Follow us on twitter for the latest announcements!'
		const {email, password} = req.body;
		if (!email || !password) {
			errors.push('Please fill out all items');
			return res.json({errors})
		}
		// let user = await User.findOne({email});

		// if (!user) {
		// 	errors.push('This user does not exist');
		// 	return res.json({errors, exists: false})
		// } else {
			console.log({user: req.user})
			return res.json({errors: false, user: req.user})
		//}
		
	})

	//common App shared functionality

	commonApp.use(helmet());

	//cookie parser
	commonApp.use(cookieParser());

	//Express body parser
	commonApp.use(bodyParser.json());
	commonApp.use(bodyParser.urlencoded({ extended: false }));

	//express session
	commonApp.use(
	  session({
	    secret: "secret",
	    resave: true,
	    saveUninitialized: true,
	    proxy: true,
	    cookie: { secure: false }
	  })
	);

	// // Passport config
	// require('./config/passport')(passport);

	// //Passport Middleware
	// commonApp.use(passport.initialize());
	// commonApp.use(passport.session());
}