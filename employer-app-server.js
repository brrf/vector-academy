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

const Manager = require('./schemas/managers');

const authentication = require('./routes/authentication.js');

module.exports = function(employerApp, environment) {

	employerApp.use(helmet());

	//cookie parser
	employerApp.use(cookieParser());

	//Express body parser
	employerApp.use(bodyParser.json());
	employerApp.use(bodyParser.urlencoded({ 
		extended: false,
		limit:'100MB'
	}));


	//access db
	mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true, 
		useUnifiedTopology: true
	});

	//express session
	employerApp.use(
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

	//employerApp routes
	// employerApp.use(express.static(path.join(__dirname, 'main-app', environment)));

	// employerApp.get('/', (req, res)=> {
	// 		res.sendFile(path.join(__dirname, 'main-app', environment, 'index.html'));
	// });

	// Passport config
	require('./config/passport')(passport, 'employer');

	//Passport Middleware
	employerApp.use(passport.initialize());
	employerApp.use(passport.session());

	employerApp.use(flash());

	//employerApp routes
};