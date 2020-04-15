const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
	discipline: {
		type: String, 
		required: true
	},
	description: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	otherInformation: {
		type: String,
		required: false
	},
	skillsRequested: {
		type: Array,
		required: false
	}
}, {minimize: false});

module.exports = positionSchema;