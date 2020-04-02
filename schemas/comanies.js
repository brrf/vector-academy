const mongoose = require('mongoose');
const positionSchema = require('./positions');

const companySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	positions: {
		type: [positionSchema]
	}
}, {minimize: false});

module.exports = mongoose.model('Company', companySchema);