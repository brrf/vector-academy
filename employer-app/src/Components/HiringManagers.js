import React, {useState, useEffect} from 'react';
import Home from './Home';
import Admin from './Admin';
import '../css/app.css';

export default function HiringManagers(props) {

	const [email, updateEmail] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		console.log('submitted');
	}

	return (
		<form>
			<h3>Add a new admin</h3>
			<input
			className="form-full-width"
			type="email"
			name="email"
			autoComplete="email"
			onChange={(e) => updateEmail(e)}
			placeholder='E-mail'
			value={email}
			/>
			<div>
				<button onClick={handleSubmit}>Submit</button>
			</div>
        </form>
	)
};