const Manager = require("../schemas/managers");
const mongoose = require("mongoose");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

module.exports = function(passport) {
	passport.use('employer-strategy',
		new LocalStrategy(
			{
				usernameField: "email",
				passwordField: "password",
				passReqToCallback : true
			},
			function(req, username, password, done) {
				console.log({username});
				Manager.findOne({ email: username }, async function(err, user) {
					console.log({user})
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
					done(null, user);
				});
			}
		)
	);

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		Manager.findById(id, function(err, user) {
			done(err, user);
		});
	});
};