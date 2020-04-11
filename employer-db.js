const mongoose = require('mongoose');
require('dotenv').config();

const employerConnection = mongoose.createConnection(process.env.MONGO_URI_EMPLOYER, {
	useNewUrlParser: true, 
	useUnifiedTopology: true
});

employerConnection.model('Manager', require('./schemas/managers'));
employerConnection.model('Company', require('./schemas/companies'));

employerConnection.on('error', console.error.bind(console, 'connection error:'));
employerConnection.once('open', function() {
  console.log('Connected to Employer MongoDB!')
});

module.exports = employerConnection;