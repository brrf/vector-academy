const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../schemas/users');

module.exports = function(mainApp) {
	mainApp.post('/studentregister', async (req, res) => {

		//determine if coming through promoted landing page
		const regex = /landing/
		const promotion = regex.test(req.headers.referer);

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
	// mainApp.post('/studentlogin', passport.authenticate('local'), async (req, res) => {
	// 	console.log(req.user);
	// 	let errors = [];
	// 	const success = 'We will be opening student registration soon. Follow us on twitter for the latest announcements!'
	// 	const {email, password} = req.body;
	// 	if (!email || !password) {
	// 		errors.push('Please fill out all items');
	// 		return res.json({errors, exists: false})
	// 	}
	// 	let user = await User.findOne({email});
	// 	if (!user) {
	// 		errors.push('This user does not exist');
	// 		return res.json({errors, exists: false})
	// 	} else {
	// 		return res.json({errors: false, user: req.user})
	// 	}		
	// })
}