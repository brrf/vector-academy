const Student = require("../schemas/students");
const mongoose = require("mongoose");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

module.exports = function(passport) {
	passport.use('student-strategy',
		new LocalStrategy(
			{
				usernameField: "email",
				passwordField: "password",
				passReqToCallback : true
			},
			function(req, username, password, done) {
				console.log('am i here again?');
				Student.findOne({ email: username }, async function(err, user) {
					if (err) {
						return done(err);
					}
					if (!user) {
						return done(null, false, {message: 'No such user exists'});
					}
					const match = await bcrypt.compare(password, user.password);
					if (!match) {
						return done(null, false, {message: 'Incorrect password'});
					}
					return done(null, user);
				});
			}
		)
	);

	passport.serializeUser(function(user, done) {
		console.log('a student awaits!')
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		Student.findById(id, function(err, user) {
			done(err, user);
		});
	});
};