const mongoose = require('mongoose');

module.exports = function () {
	mongoose.connect(process.env.MONGO_URI_EMPLOYER, {
		useNewUrlParser: true, 
		useUnifiedTopology: true
	});

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log('Connected to Employer MongoDB!')
	});
}

