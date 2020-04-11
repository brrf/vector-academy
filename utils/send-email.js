const nodemailer = require('nodemailer');

module.exports = function sendEmail(sender, recipient, subject, text) {
	let transport = nodemailer.createTransport({
		host: 'smtp.zoho.com',
		port: 465,
		auth: {
		   user: process.env.ZOHOUSER,
		   pass: process.env.ZOHOPASS
		}
	});

	const message = {
		from: sender, // Sender address
		to: recipient,         // List of recipients
		subject, // Subject line
		text // Plain text body
	};
	
	transport.sendMail(message, function(err, info) {
	  if (err) {
	    console.log({err});
	    return ({err: true})
	  } else {
	    return {err: false}
	  }
	});
};