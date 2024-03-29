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
const createNewCompany = require('./utils/createNewCompany');

const employerConnection = require('./employer-db');
const Manager = employerConnection.model('Manager');
const Company = employerConnection.model('Company');

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
			res.sendFile(path.join(__dirname, 'employer-app', environment, 'index.html'), function(err) {
				if (err) {
					res.status(500).send(err)
				}
			});
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

	employerApp.put('/changepassword', async (req, res) => {
		let errors = [];
		let user;

		if (!req.body.password || !req.body.password2) {
			errors.push('Please fill out all the fields')
		} else if (!req.user) {
			errors.push('We could not find your account. Try again.')
		} else if (req.body.password !== req.body.password2) {
			errors.push('Password do not match')
		} 
		if (errors.length > 0) {
			return res.json({errors})
		} else {
			const saltRounds = 10;
			const {password} = req.body;
			bcrypt.genSalt(saltRounds, function(err, salt) {
				bcrypt.hash(password, salt, async function(err, hash) {
					try {
						await Manager.findByIdAndUpdate(req.user.id, {password: hash, originalPassword: false})
						res.json({errors: false})
					} catch {
						res.json({errors: ['Could not update database. Try again.']})
					}
				});
			});	
		};
	});

	//temporary code to create a Vector admin. Delete after use!
	employerApp.get('/launchadmin', async (req, res) => {
		try {
			let user = await Manager.findOne({email: 'moshe@vectoracademy.io'});
			if (!user) {
				const company = await createNewCompany('Vector Academy')
				const password = generatePassword();
				const saltRounds = 10;
				bcrypt.genSalt(saltRounds, function(err, salt) {
					bcrypt.hash(password, salt, async function(err, hash) {
						await Manager.create({
							password: hash,
							email: 'moshe@vectoracademy.io',
							fname: 'Moshe',
							lname: 'Praver',
							clearance: 2,
							companyId: company.id,
							name: 'Vector'
						}, async (err, user) => {
							if (err) {
								console.error({err});
								return res.json({errors: true})
							} else {
								sendEmail('moshe@vectortrainingacademy.com', 'moshe@vectortrainingacademy.com', 'Change password', `Your temporary password is ${password}`);
								return res.json({errors: false})
							}
						});
					});
				});
			}
		} catch {
			return res.json({errors: true});
		}	
	});

	employerApp.post('/spawnmanager', async function (req, res) {
		let errors = [];
		let user, company, email, companyName, fname, lname, newCompany;
		({email, fname, lname} = req.body);

		if (!req.user) {
			errors.push('We could not find your account. Try again.')
		//if Vector admin, will need to create or find a company
		} else if (req.user.clearance === 2) {
			({companyName, newCompany} = req.body);
			if (!email || !fname || !lname || !companyName) {
				errors.push('Please fill out all the fields')
			}
			//try to find the company; check for edge cases; if it doesn't exist, create it
			company = await Company.findOne({name: companyName});
			if (newCompany && company) {
				errors.push('This company already seems to exist.');
			} else if (!newCompany && !company) {
				errors.push('The selected company was not found.')
			} else if (newCompany && !company) {
				company = await createNewCompany(companyName);
			}
		} else if (!email || !fname || !lname) {
			errors.push('Please fill out all the fields')
		} else if (req.user.clearance < 1) {
			errors.push('You do not have the clearance for this operation.')
		} else {	
			user = await Manager.findOne({email});
			if (user) {
				errors.push('Email is already registered')
			} 
		};

		const companyId = company ? company.id : req.user.companyId

		const saltRounds = 10;
		const password = generatePassword();
		const clearance = req.user.clearance === 1
			? 0
			: 1

		if (errors.length > 0) {
			return res.json({errors})
		};

		bcrypt.genSalt(saltRounds, function(err, salt) {
			bcrypt.hash(password, salt, async function(err, hash) {
				await Manager.create({
					password: hash,
					email,
					fname, 
					lname,
					clearance,
					companyId
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
	employerApp.route('/newposition')
		.post(async function (req, res) {
			const {fname, lname, discipline, state, city, description, requestedSkills} = req.body;
			if (!fname || !lname || !discipline || !state || !city || !description) {
				return res.json({errors: ['Please fill out all fields']})
			} else if (!requestedSkills || requestedSkills.length !== 3) {
				return res.json({errors: ['Please request 3 courses']})
			};

			const submittedSkills = requestedSkills.map(skill => skill.label);

			const position = {
				supervisorFname: fname,
				supervisorLname: lname,
				discipline: discipline.label,
				description,
				city,
				state,
				requestedSkills: submittedSkills,
				approved: 0,
				company: req.user.companyId
			}

			if (req.body.other) position.otherInformation = req.body.other

			try {
				await Company.findByIdAndUpdate(req.user.companyId, {
					$push: {positions: position}
				});
				return res.json({errors: false})	
			} catch {
				return res.json({errors: ['Error saving position to database']})
			};
		})
		.put(async function (req, res) {
			let errors = [];
			let updatedCompanyPositions, companyId, company;
			const positionId = req.body.positionId;

			if (req.user.clearance === 2) {
				companyId = req.body.companyId;		
			} else {
				companyId = req.user.companyId;
			}
			try {
				company = await Company.findById(companyId);
			} catch {
				return res.json({errors: ['Error finding company in database']});
			}

			if (req.body.approved === 2 && req.user.clearance !== 2 || req.body.approved === 1 && req.user.clearance !== 2) {
				errors.push('You do not have clearance for this operation')
			} else if (!companyId || !positionId) {
				 errors.push('Please provide company and position IDs.');

			//Vector admin approves a position
			} else if (req.body.approved === 2) {		
				updatedCompanyPositions = company.positions.map(position => {
					if(position.id === positionId) {
						position.approved = 2
					};
					return position;
			});
			//Vector admin requests a revision
			} else if (req.body.approved === 1) {
				const {formData} = req.body;
				if (!formData) errors.push('Please select a field for revision')
				else {
					formData.forEach(section => {
						if (!section.message) {
							errors.push('Suggestion cannot be empty');
							return;
						};
					});
					updatedCompanyPositions = company.positions.map(position => {
						if(position.id === positionId) {
							position.revisions = formData;
							position.approved = 1
						};
						return position;
					});
				}
			//Company submits a revision
			} else if (req.body.approved === 0) {
				const {fname, lname, discipline, state, city, description, requestedSkills} = req.body.formData;
				if (!fname || !lname || !discipline || !state || !city || !description) {
					return res.json({errors: ['Please fill out all fields']})
				} else if (!requestedSkills || requestedSkills.length !== 3) {
					return res.json({errors: ['Please request 3 courses']})
				};

				const submittedSkills = requestedSkills.map(skill => skill.label);

				const revisedPosition = {
					supervisorFname: fname,
					supervisorLname: lname,
					discipline: discipline.label,
					description,
					city,
					state,
					requestedSkills: submittedSkills,
					approved: 0,
					company: companyId,
					revisions: []
				};

				if (req.body.formData.other) revisedPosition.otherInformation = req.body.formData.other
						
				updatedCompanyPositions = company.positions.map(position => {
					if(position.id === positionId) {
						position = revisedPosition;
					};
					return position;
				});
				
			}

			try {
				if (company.positions.length !== updatedCompanyPositions.length) {
					return res.json({errors: ['An unauthorized delete operation was attempted and aborted']});
				}
				company.positions = updatedCompanyPositions;
				company.markModified('positions');
				await company.save();
			} catch {
				errors.push('Error updating database')
			};
				
			if (errors.length !== 0) {
				res.json({errors});
			} else {
				res.json({errors: false})
			}
		})
	.delete(async function(req, res) {
		const {positionId, companyId} = req.body;
		let company, updatedCompanyPositions;

		if (req.user.clearance !== 2) {
			return res.json({errors: ['You do not have clearance for this operation.']})
		};

		try {
			company = await Company.findById(companyId);		
		} catch (err) {
			return res.json({errors: ['Error finding company in database']});
		}

		updatedCompanyPositions = company.positions.map(position => {
			if(position.id === positionId) {
				position.approved = -1;
			};
			return position;
		});

		try {
			company.positions = updatedCompanyPositions;
			company.markModified('positions');
			await company.save();
			res.json({errors: false})
		} catch {
			return res.json({errors: ['Error updating database']})
		};
	});

	employerApp.get('/companylist', async (req, res) => {
		await Company.find({}, function(err, companies) {
			if (err) {
				res.json({errors: ['Error finding companies']})
			} else {
				res.json({companyList: companies})
			}
		})
	});

	employerApp.get('/hydratecompany', async (req, res) => {
		if (!req.user) {
			return res.json({errors: ['Your credentials were not found.']})
		}
		await Company.findById(req.user.companyId, function(err, company) {
			if (err) {
				res.json({errors: ['Could not find company']});
			} else {
				res.json({company: company.name})
			}
		})
	})

	employerApp.get('/getpositions', async (req, res) => {
		let positionList = [];
		if (!req.user) {
			const companyList = await Company.find({});
			for (let i = 0; i < companyList.length; i++) {
				companyList[i].positions.forEach(position => {
					if (position.approved === 2) {
						let modifiedPosition = JSON.parse(JSON.stringify(position));
						modifiedPosition.companyName = companyList[i].name	
						positionList.push(modifiedPosition);
					}
				});
			}
		} else	if (req.user.clearance === 2) {
			try {
				const companyList = await Company.find({});

				for (let i = 0; i < companyList.length; i++) {
					companyList[i].positions.forEach(position => {
						let modifiedPosition = JSON.parse(JSON.stringify(position));
						modifiedPosition.companyName = companyList[i].name	
						positionList.push(modifiedPosition);
					});
				}
			} catch {
				if (err) {
					res.json({errors: ['Error finding companies']})
				};
			};
		} else {
			try {
				const company = await Company.findById(req.user.companyId);
				company.positions.forEach(position => positionList.push(position))
			} catch {
				if (err) {
					res.json({errors: ['Error finding companies']})
				};
			};
		};
		res.json({positionList});
	})
};

