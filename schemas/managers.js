const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
	password: {
		required: true,
		type: String
	},
	email: {
		required: true,
		type: String,
		unique: true
	},
	//0: hiring manager, 1: hiring admin, 2: vector admin
	clearance: {
		required: true,
		type: Number,
		default: 0
	},
	company: {
		type: String,
		required: true	
	}
}, {minimize: false});

module.exports = mongoose.model('Manager', managerSchema);