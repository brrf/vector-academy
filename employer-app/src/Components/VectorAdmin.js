import React, {useState, useEffect} from 'react';
import Warning from './Warning';

export default function VectorAdmin(props) {

	const [companyList, updateCompanyList] = useState([]);
	const [formData, updateFormData] = useState({
		email: '',
		companyName: '',
		adminName: '',
		newCompany: true
	});
	const [errors, updateErrors] = useState([]);

	useEffect(fetchCompanies, [formData.newCompany]);

	function fetchCompanies () {
		if (!formData.newCompany) return;

		fetch(`${PROTOCOL}${DOMAIN}/companylist`, {
	      method: "GET",
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
	            updateCompanyList(resObject.companyList);
	        }
		})
	};

	function handleSubmit(e) {
		e.preventDefault();
		
		if (!formData.email || !formData.companyName || !formData.adminName) {
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
	};

	function handleUpdateFormData(field, value) {
		console.log('here');
		updateFormData({
			...formData,
			[field]: value
		})
	}

	return (
		<form>
			<Warning errors={errors} />
			<div className='application-input-radio-section'>
				<h3>Is this a new company?</h3>
				<div className='application-input-radio'>
				    <label>
					    <input		      
					      type="radio"
					      name="citizen"
					      value={true}     
					      checked={formData.newCompany}
					      onChange={() => handleUpdateFormData('newCompany', true)}
					    />
					    Yes
				    </label>
				    <label>
					    <input		      
					      type="radio"
					      name="citizen"
					      value=''
					      checked={!formData.newCompany}	 
					      onChange={() => handleUpdateFormData('newCompany', false)}     			      
					    />
					    No
				    </label>
				</div>
			</div>
			{
				!formData.newCompany
					? <React.Fragment>
						<h3>Choose company:</h3>
						<select value={formData.companyName} onChange={(e) => handleUpdateFormData('companyName', e.target.value)}>
							{
								companyList.map(company => {
									return (
										<option value={company.id} key={company.name}>{company.name}</option>
									)
								})
							}
						</select>
					</React.Fragment>
					: <input
						className="form-full-width"
						type="text"
						name="company-name"
						onChange={(e) => handleUpdateFormData('companyName', e.target.value)}
						placeholder='Company Name'
						value={formData.companyName}
					/>
			}
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
			<h3>Admin name</h3>
			<input
			className="form-full-width"
			type="text"
			name="admin-name"
			onChange={(e) => handleUpdateFormData('adminName', e.target.value)}
			placeholder='Administrator Name'
			value={formData.adminName}
			/>
			<div>
				<button onClick={handleSubmit}>Submit</button>
			</div>
        </form>
	)
};