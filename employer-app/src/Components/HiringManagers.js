import React, {useState, useEffect} from 'react';
import Home from './Home';
import Admin from './Admin';
import Warning from './Warning';
import '../css/app.css';

export default function HiringManagers(props) {

	const [formData, updateFormData] = useState({
		email: '',
		fname: '',
		lname: ''
	});
	const [errors, updateErrors] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		
		if (!formData.email || !formData.fname || !formData.lname) {
	      updateErrors(['Please fill out all the fields']);
	      return;
	    };

	    fetch(`${PROTOCOL}${DOMAIN}/spawnmanager`, {
	      method: "POST",
	      body: JSON.stringify(formData),
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

	function handleUpdateFormData(field, value) {
		updateFormData({
			...formData,
			[field]: value
		})
	};

	return (
		<form>
			<Warning errors={errors} />
			<h3>Admin email</h3>
			<input
			className="form-full-width"
			type="email"
			name="email"
			autoComplete="email"
			onChange={(e) => handleUpdateFormData('email', e.target.value)}
			placeholder='E-mail'
			value={formData.email}
			/>
			<h3>Admin first name</h3>
			<input
			className="form-full-width"
			type="text"
			name="first-name"
			onChange={(e) => handleUpdateFormData('fname', e.target.value)}
			placeholder='First Name'
			value={formData.fname}
			/>
			<h3>Admin last name</h3>
			<input
			className="form-full-width"
			type="text"
			name="admin-name"
			onChange={(e) => handleUpdateFormData('lname', e.target.value)}
			placeholder='Last Name'
			value={formData.lname}
			/>
			<div>
				<button onClick={handleSubmit}>Submit</button>
			</div>
        </form>
	)
};