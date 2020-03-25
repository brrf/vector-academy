const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../schemas/users');

module.exports = function(marketingApp) {
	marketingApp.post('/studentregister', async (req, res) => {

		//determine if coming through promoted landing page
		const regex = /landing/
		const promotion = regex.test(req.headers.referer);

	 	let errors = [];
		const saltRounds = 10;
		if (!req.body) {
			errors.push('Client-side error');
			return res.json({errors});
		}
		const {password, password2, email} = req.body;
		if (!password || !password2 || !email) {
			errors.push('Please fill out all items');
		};
		if (password !== password2) {
			errors.push('Passwords do not match')
		};

		let user = await User.findOne({email});
		if (user) {
			errors.push('Email is already registered. Stay tuned!')
		} 
		if (errors.length > 0) {
			res.json({errors})
		} else {
			bcrypt.genSalt(saltRounds, function(err, salt) {
				bcrypt.hash(password, salt, async function(err, hash) {
					await User.create({
						password: hash,
						email,
						promotion
					}, (err, user) => {
						if (err) {
							console.error(err);
							res.send('an error occurred');
						} else {
							return res.json({errors: false, promotion})
						}
					});
	    		});
			});				
		}
	})
}