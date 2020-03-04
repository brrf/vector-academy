const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
	}
}, {minimize: false});

module.exports = mongoose.model('User', userSchema);