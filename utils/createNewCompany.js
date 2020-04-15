const employerConnection = require('../employer-db');
const Company = employerConnection.model('Company');

module.exports = async function createNewCompany(name) {
    try {
    	return (
    		Company.create({name})
    	)
    } catch (err) {
    	console.log(err);
    }
}