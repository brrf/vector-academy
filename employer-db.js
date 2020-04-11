// const mongoose = require('mongoose');

// const employerConnection = mongoose.createConnection(process.env.MONGO_URI_EMPLOYER, {
// 	useNewUrlParser: true, 
// 	useUnifiedTopology: true
// });



// module.exports = function () {
// 	mongoose.connect(process.env.MONGO_URI_EMPLOYER, {
// 		useNewUrlParser: true, 
// 		useUnifiedTopology: true
// 	});

// 	const employerdb = mongoose.connection;
// 	employerdb.on('error', console.error.bind(console, 'connection error:'));
// 	employerdb.once('open', function() {
// 	  console.log('Connected to Employer MongoDB!')
// 	});
// }

// const mongoose = require('mongoose');

// const studentConnection = mongoose.createConnection(process.env.MONGO_URI_EMPLOYER, {
// 	useNewUrlParser: true, 
// 	useUnifiedTopology: true
// });
// studentConnection.model('Student', require('./schemas/Students'));

// const studentdb = mongoose.connection;
// 	studentdb.on('error', console.error.bind(console, 'connection error:'));
// 	studentdb.once('open', function() {
// 	  console.log('Connected to Student MongoDB!')
// });

// module.exports = studentConnection;
