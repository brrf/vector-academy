'use strict';

const express = require('express');
const fs = require('fs');
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
const multer  = require('multer');

const User = require('./schemas/users');

const authentication = require('./routes/authentication.js');

module.exports = function(mainApp, environment) {

	mainApp.use(helmet());

	//cookie parser
	mainApp.use(cookieParser());

	//Express body parser
	mainApp.use(bodyParser.json());
	mainApp.use(bodyParser.urlencoded({ 
		extended: false,
		limit:'50mb'
	}));


	//access db
	mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true, 
		useUnifiedTopology: true
	});

	//express session
	mainApp.use(
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

	//mainApp routes
	mainApp.use(express.static(path.join(__dirname, 'main-app', environment)));

	mainApp.get('/', (req, res)=> {
			res.sendFile(path.join(__dirname, 'main-app', environment, 'index.html'));
	});

	// Passport config
	require('./config/passport')(passport);

	//Passport Middleware
	mainApp.use(passport.initialize());
	mainApp.use(passport.session());

	mainApp.use(flash());

	//Multer config
	const storage = multer.diskStorage({

	  destination: function (req, file, cb) {
	    cb(null, path.join(__dirname + '/public/student-cvs/' + req.user.id + '/'));
	  },
	  filename: function (req, file, cb) {
	    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	  }
	})

	function checkFileType(file, cb) {
		console.log('checking file');
	  // Allowed ext
	  const filetypes = /pdf/;
	  // Check ext
	  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	  // Check mime
	  const mimetype = filetypes.test(file.mimetype);

	  if(mimetype && extname){
	    return cb(null,true);
	  } else {
	    cb(null, false);
	  }
	}
	 
	const upload = multer({ 
	  storage,
	  limits: {fileSize: 10000000},
	  fileFilter: function(req, file, cb) {
	  	console.log('upload area');
	    checkFileType(file, cb)
	  } }).single('cv')

	//mainApp routes

	mainApp.post('/studentlogin', function (req, res, next) {
		passport.authenticate('local', {failureFlash: true}, function (err, user, info) {
			if (err) return next(err);
			if (!user) {
				return res.json({errors: [info.message]})
			} else {
				req.login(user, (err) => {
					if (err) return next(err);
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

	mainApp.get('/stripetoken', async (req, res) => {
		const stripe = require('stripe')('sk_test_dIFfqpgQbCkdidh0cAgaSmm300nOuWOMJE');

		 const paymentIntent = await stripe.paymentIntents.create({
		    amount: 3500,
		    currency: 'usd'
		  });
		return res.json({secret: paymentIntent.client_secret});
	})

	mainApp.get('/cv', async (req, res) => {
		const pdf = __dirname + '/public/student-cvs/' + req.user._id + '/' + req.user.application.cv.filename;
		console.log({serverPdf: pdf})
		const data = fs.readFile(pdf, function (err, content) {
			if (err) {
				console.log('server error');
				res.json({errors: ['Error retrieving PDF']})
			} else {
				console.log({content});
				res.writeHead(200, {"Content-type": "application/pdf"});
				res.end(content);
			}
		});
	})

	mainApp.post('/application', async (req, res) => {
		let errors = []
		let user;
		try {
			user = await User.findById(req.user._id);
		} catch {
			return errors.push('Could not find user on server. Try submitting again.')
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
			case 5: {
				const {why, what, where} = req.body.data;
				if (!why || !what || !where) {
					errors.push('Please fill out all items');
				} else if (why.split(' ').length > 500 || what.split(' ').length > 500 || where.split(' ').length > 300) {
					errors.push('Please keep response length within limits')
				} else {
					try {
						user.application.questions = {
							why,
							what,
							where
						};
						user.markModified('application');
						user.save();
					} catch (err) {
						console.log(err);
						errors.push('Error saving to database.')
						return res.json({errors})
					}
				}
				break;
			}
			case 7: {
				const {street, city, state, zip} = req.body.data
				if (!street || !city || !state || !zip) {
					errors.push('Please fill out all items');
				}
				const {contactInformation, apScores, testScore, essay, cv, questions} = user.application;
				if (!contactInformation || !apScores || !testScore || !essay || !cv || !questions) {
					errors.push('Please fill out the entire application before submission.')
				}
				else {
					try {
						user.application.contactInformation = {
							...user.application.contactInformation,
							street,
							city,
							state,
							zip
						};
						user.markModified('application');
						user.status = 1;
						user.markModified('status');
						await user.save();
					} catch (err) {
						console.log(err);
						errors.push('Error saving to database.')
						return res.json({errors})
					}
				}
				break;
			}
		}
		if (errors.length > 0) {
			return res.json({errors});
		};	
		res.json({errors: false});
	});

	mainApp.post('/applicationfile', (req, res) => {
		console.log('hit the route');
		let errors = []
		let user;
		upload(req, res, async function(err) {
			console.log('in the upload?')
			if (err) {
				errors.push('An error occured on uploading. The file may be too large.');
				console.log({errors});
			} else {
				try {
					user = await User.findById(req.user._id);
				} catch {
					errors.push('Could not find user on server. Try submitting again.')
				}
				console.log({file: req.file})
				if (!req.file) {
					return res.json({errors: ['No file was received by the server']});
				} else if (req.file.mimetype !== 'application/pdf') {
					return res.json({errors: ['Please upload a pdf']})
				}
				try {
					user.application.cv = req.file;
					user.markModified('application');
					user.save();	
				} catch (err) {
					console.log(err);
					errors.push('Error saving to database.')
					return res.json({errors})
				}
			}
			if (errors.length > 0) {
				return res.json({errors});
			}	else res.json({errors: false, file: req.file});
		});
	});
};