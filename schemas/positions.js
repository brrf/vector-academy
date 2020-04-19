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
	approved: {
		type: Boolean,
		required: true,
		default: false
	}
}, {minimize: false});

module.exports = positionSchema;