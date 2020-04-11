'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
const passport = require('passport').Passport,
employerPassport = new passport();
const flash = require('connect-flash');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const session = require("express-session");
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const multer  = require('multer');
const bcrypt = require('bcrypt');
const generatePassword = require('./utils/generate-password');
const sendEmail = require('./utils/send-email');

const Manager = require('./schemas/managers');

module.exports = function (employerApp, environment) {

	employerApp.use(helmet());

	//cookie parser
	employerApp.use(cookieParser());

	//Express body parser
	employerApp.use(bodyParser.json());
	employerApp.use(bodyParser.urlencoded({ 
		extended: false,
		limit:'100MB'
	}));

	const employerConnection = require('./employer-db');
	const Manager = employerConnection.model('Manager');

	//express session
	employerApp.use(
	  session({
	    secret: "another secret",
	    resave: true,
	    saveUninitialized: true,
	    proxy: true,
	    cookie: { secure: false },
	    store: new MongoStore({
	    	mongooseConnection: employerConnection
	    })
	  })
	);

	// Passport config
	require('./config/employer-passport')(employerPassport);

	//Passport Middleware
	employerApp.use(employerPassport.initialize());
	employerApp.use(employerPassport.session());

	employerApp.use(flash());

	//employerApp routes

	employerApp.use(express.static(path.join(__dirname, 'employer-app', environment)));

	employerApp.get('/', (req, res)=> {
			res.sendFile(path.join(__dirname, 'employer-app', environment, 'index.html'));
	});

	employerApp.post('/employerlogin', function (req, res, next) {
		employerPassport.authenticate('employer-strategy', {failureFlash: true}, function (err, user, info) {
			if (err) return next(err);
			if (!user) {
				return res.json({errors: [info.message]})
			} else {
				req.logIn(user, (err) => {
					if (err) return next(err);
				});
				return res.json({errors: false, user})
			}
		})(req, res, next)
	});

	employerApp.get('/authenticate', (req, res) => {
		res.json({user: req.user});
	});

	employerApp.get('/employerlogout', (req, res) => {
		try {
			req.logout();
	  		res.json({error: false});
		} catch {
			res.json({error: true})
		}
	});

	//temporary code to create a Vector admin. Delete after use!
	employerApp.get('/upgradeadmin', async (req, res) => {
		if (req.user.email === 'moshe@vectoracademy.io') {
			try {
				let user = await Manager.findOne({email: req.user.email});
				user.clearance = 2;
				user.markModified('clearance');
				await user.save();
				res.json({errors: false})
			} catch {
				res.json({errors: true});
			}	
		}
	});

	employerApp.post('/spawnmanager', async function (req, res) {
		let errors = [];
		let user;
		if (!req.body.email) {
			errors.push('Please fill out all the fields')
		} else if (!req.user) {
			errors.push('We could not find your account. Try again.')
		} else if (req.user.clearance !== 1) {
			errors.push('You do not have the clearance for this operation.')
		} else {	
			user = await Manager.findOne({email: req.body.email});
			if (user) {
				errors.push('Email is already registered. Stay tuned!')
			} 
		};
		if (errors.length > 0) {
			return res.json({errors})
		} else {
			const saltRounds = 10;
			const {email} = req.body;
			const password = generatePassword();

			bcrypt.genSalt(saltRounds, function(err, salt) {
				bcrypt.hash(password, salt, async function(err, hash) {
					await Manager.create({
						password: hash,
						email,
						clearance: 0,
						company: 'Tesla'
					}, async (err, user) => {
						if (err) {
							console.error({err});
							res.send('an error occurred');
						} else {
							sendEmail('moshe@vectortrainingacademy.com', 'moshe@vectortrainingacademy.com', 'Change password', `Your temporary password is ${password}`);
							return res.json({errors: false})
						}
					});
	    		});
			});				
		};
	});

	employerApp.post('/employerregister', async function (req, res) {
		if (!req.body.email || req.body.username) {
			return res.json({errors: ['Please fill out all the fields']})
		} else if (req.ip !== process.env.IP) {
			return res.json({errors: ['Please login from onsite workstation']})
		} else {
			let errors = [];
			const saltRounds = 10;

			const {password, email} = req.body;
			let user = await Manager.findOne({email});
			if (user) {
				errors.push('Email is already registered. Stay tuned!')
			} 
			if (errors.length > 0) {
				res.json({errors})
			} else {
				bcrypt.genSalt(saltRounds, function(err, salt) {
					bcrypt.hash(password, salt, async function(err, hash) {
						await Manager.create({
							password: hash,
							email,
							clearance: 1,
							company: 'Tesla'
						}, (err, user) => {
							if (err) {
								console.error(err);
								res.send('an error occurred');
							} else {
								return res.json({errors: false})
							}
						});
		    		});
				});				
			};
		}
	});
};

