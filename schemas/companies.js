const mongoose = require('mongoose');
const positionSchema = require('./positions');
const managerSchema = require('./managers');

const companySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	positions: {
		type: Array,
		default: []
	},
	managers: {
		type: Array,
		default: []
	}
}, {minimize: false});

module.exports = companySchema;