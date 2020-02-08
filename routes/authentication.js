const bcrypt = require('bcrypt');
const User = require('../schemas/users');

module.exports = function(mainApp) {
	mainApp.post('/register', async (req, res) => {
	 	let errors = [];
		const saltRounds = 10;
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
						email
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
		}
	})
}