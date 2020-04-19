const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
	password: {
		required: true,
		type: String
	},
	originalPassword: {
		required: true,
		type: Boolean,
		default: true
	},
	email: {
		required: true,
		type: String,
		unique: true
	},
	fname: {
		required: true,
		type: String
	},
	lname: {
		required: true,
		type: String
	},
	//0: hiring manager, 1: hiring admin, 2: vector admin
	clearance: {
		required: true,
		type: Number,
		default: 0
	},
	supervisingAdminId: {
		type: String,
		required: false
	},
	companyId: {
		type: String,
		required: true	
	},
	postedPositionIds: {
		type: Array,
		required: false
	}
}, {minimize: false});

module.exports = managerSchema