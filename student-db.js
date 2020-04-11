const mongoose = require('mongoose');
require('dotenv').config();

const studentConnection = mongoose.createConnection(process.env.MONGO_URI_STUDENT, {
	useNewUrlParser: true, 
	useUnifiedTopology: true
});
studentConnection.model('Student', require('./schemas/Students'));

studentConnection.on('error', console.error.bind(console, 'connection error:'));
studentConnection.once('open', function() {
	  console.log('Connected to Student MongoDB!')
});

module.exports = studentConnection;