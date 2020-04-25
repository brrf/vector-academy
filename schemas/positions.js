const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
	discipline: {
		type: String, 
		required: true
	},
	supervisorFname: {
		type: String,
		required: true
	},
	supervisorLname: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	otherInformation: {
		type: String,
		required: false
	},
	requestedSkills: {
		type: Array,
		required: true
	},
	//0 = submitted; 1 = revision requested; 2 = approved; -1 = rejected
	approved: {
		type: Number,
		required: true,
		default: 0
	},
	revisions: {
		type: Array,
		required: false
	},
	company: {
		type: String,
		required: true
	}
}, {minimize: false});

module.exports = positionSchema;