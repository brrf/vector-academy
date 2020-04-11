import React, {useState, useEffect} from 'react';
import Home from './Home';
import Admin from './Admin';
import Warning from './Warning';
import '../css/app.css';

export default function HiringManagers(props) {

	const [email, updateEmail] = useState('');
	const [errors, updateErrors] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		
		if (!email) {
	      updateErrors(['Please fill out all the fields']);
	      return;
	    };

	    fetch(`${PROTOCOL}${DOMAIN}/spawnmanager`, {
	      method: "POST",
	      body: JSON.stringify({email}),
	      headers: { 
	        "Content-Type": "application/json",
	      },
	      mode: "cors",
	      credentials: "include"
	    })
	      .then(res => res.json())
	      .then(resObject => {
	        if (resObject.errors) {
	          let newErrors = [];
	          resObject.errors.forEach(error => {
	            newErrors.push(error);
	          });
	          updateErrors(newErrors);
	        } else {
	            console.log('should have worked');
	        }
	      });
	}

	return (
		<form>
			<Warning errors={errors} />
			<h3>Add a new admin</h3>
			<input
			className="form-full-width"
			type="email"
			name="email"
			autoComplete="email"
			onChange={(e) => updateEmail(e.target.value)}
			placeholder='E-mail'
			value={email}
			/>
			<div>
				<button onClick={handleSubmit}>Submit</button>
			</div>
        </form>
	)
};