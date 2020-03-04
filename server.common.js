'use strict';

const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
const passport = require('passport');
const flash = require('connect-flash');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const session = require("express-session");
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

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

	//expression session
	mainApp.use(
	  session({
	    secret: "secret",
	    resave: true,
	    saveUninitialized: true,
	    proxy: true,
	    cookie: { secure: false },
	  })
	);

	// Passport config
	require('./config/passport')(passport);

	//Passport Middleware
	mainApp.use(passport.initialize());
	mainApp.use(passport.session());

	mainApp.use(flash());

	mainApp.post('/studentlogin', function (req, res, next) {
		passport.authenticate('local', {failureFlash: true}, function (err, user, info) {
			if (err) return next(err);
			if (!user) {
				return res.json({errors: [info.message]})
			} else {
				req.login(user, (err) => {
					if (err) return next(err);
					///else setInterval(() => console.log(req.user), 3000)
				});
				return res.json({errors: false, user})
			}
		})(req, res, next)
	});

	mainApp.get('/authenticate', (req, res) => {
		res.json({user: req.user});
	})

	mainApp.get('/user', async (req, res) => {
		res.json({user: req.user})
	});

	mainApp.get('/studentlogout', (req, res) => {
		try {
			req.logout();
	  		res.json({error: false});
		} catch {
			res.json({error: true})
		}
	})

	mainApp.post('/application', async (req, res) => {
		let errors = []
		let user;
		try {
			user = await User.findById(req.user._id);
		} catch {
			errors.push('Could not find user on server. Try submitting again.')
		}
		switch(req.body.applicationStep) {
			case 0: {
				const {fname, lname, highschool, birthdate, citizen, phone} = req.body.data
				if(!fname || !lname || !highschool || !birthdate || !phone) {
					errors.push('Please fill out all items.');
				} else if (!citizen) {
					errors.push('Applications are only open to US Citizens & Permanent Residents.')
				} else {
					try {
						user.application.contactInformation = {
							fname,
							lname,
							highschool,
							birthdate,
							citizen,
							phone
						};
						user.markModified('application');
						await user.save();
					} catch (err) {
						console.log(err);
						errors.push('Error saving to database.')
						return res.json({errors})
					}
				}
				break;
			}
			case 1: {
				//make sure 4 scores are submitted
				let scoresSubmitted = 0;
				for (let test in req.body.data) {
					if (req.body.data[test]) {
						scoresSubmitted++;
					}
				}
				if (scoresSubmitted < 4) {
						return res.json({errors: ['Please submit 4 total scores']});
				} else {
					const data = req.body.data
					let scores = {};
					for (let test in data) {
						scores[test] = data[test]
					}
					try {
						user.application.apScores = scores;
						user.markModified('application');
						await user.save();
					} catch (err) {
						console.log(err);
						errors.push('Error saving to database.');
						return res.json({errors});
					}
				}
				break;				
			}
			case 2: {
				let data;
				if (req.body.data.testOption === 'sat') {
					const {overallScore, math, verbal, testOption} = req.body.data;
					if (!overallScore || !math || !verbal) {
						errors.push('Please fill out all items.');
					}
					data = {testOption, overallScore, math, verbal};
				} else if (req.body.data.testOption === 'act') {
					const {english, math, reading, science,testOption} = req.body.data;
					if (!english || !math || !reading || !science) {
						errors.push('Please fill out all items.');
					}
					data = {testOption, english, math, reading, science}
				} else {
					return res.json({errors: ['No test was selected']})
				}
				try {
					user.application.testScore = data;
					user.markModified('application');
					await user.save();
				} catch (err) {
					console.log(err);
					errors.push('Error saving to database.')
					return res.json({errors})
				}
				break;
			}
			case 3: {
				//console.log(req.body)
				const {essay, selection} = req.body.data;
				if (!essay || typeof selection !== 'number') {
					return errors.push('Please fill out all items.')
				} 
				if (essay.split(' ').length > 650) {
					return errors.push('Essay is longer than 650 words');
				}
				try {
				user.application.essay = {
					selection,
					essay
				};
				user.markModified('application');
				await user.save();
				} catch (err) {
					console.log(err);
					errors.push('Error saving to database.')
					return res.json({errors})
				}
				break;
			}
		}
		if (errors.length > 0) {
			return res.json({errors});
		};	
		res.json({erorrs: false});
	});

	//common App shared functionality

	commonApp.use(helmet());

	//cookie parser
	commonApp.use(cookieParser());

	//Express body parser
	commonApp.use(bodyParser.json());
	commonApp.use(bodyParser.urlencoded({ extended: false }));

	//access db
	mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true, 
		useUnifiedTopology: true
	});

	//express session
	commonApp.use(
	  session({
	    secret: "secret",
	    resave: true,
	    saveUninitialized: true,
	    proxy: true,
	    cookie: { secure: false },
	    store: new MongoStore({
	    	mongooseConnection: mongoose.connection
	    })
	  })
	);

	// // Passport config
	// require('./config/passport')(passport);

	// //Passport Middleware
	// commonApp.use(passport.initialize());
	// commonApp.use(passport.session());
}