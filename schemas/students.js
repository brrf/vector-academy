const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	password: {
		required: true,
		type: String
	},
	email: {
		required: true,
		type: String,
		unique: true
	},
	promotion: {
		default: false,
		type: Boolean
	},
	application: {
		type: mongoose.Schema.Types.Mixed,
		default: {}		
	},
	//0 = has not applied, 1 = started application, 2 = completed application, 3 = selected for interview, 4 = submitted rank list, 5 = did not match, 6 = matched 
	status: {
		type: Number,
		default: 0
	}
}, {minimize: false});

module.exports = mongoose.model('Student', studentSchema);