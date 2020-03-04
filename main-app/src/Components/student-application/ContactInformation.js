import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import ApplicationSubmitButtons from './ApplicationSubmitButtons';

function ContactInformation (props) {
	
	const [formData, updateFormData] = useState({
		fname: '',
		lname: '',
		highschool: '',
		birthdate: '',
		citizen: true,
		phone: '',
	});
	const [edit, updateEdit] = useState(props.complete)
	const datePicker = useRef(null);
	const form = useRef(null);

	function handleUpdateFormData(e, field) {
		let value;
		if (field === 'citizen') value = Boolean(e.target.value);
		else value = e.target.value;
		updateFormData({
			...formData,
			[field]: value
		})
	}

	useEffect(getFormData, []);
	function getFormData() {
		if (props.data) {
			const {fname, lname, highschool, birthdate, citizen, phone} = props.data;
			updateFormData({
				fname,
				lname,
				highschool,
				birthdate,
				citizen,
				phone	
			})
		}
		
	}

	function editForm() {
		updateEdit(!edit);
	}

	if (edit) {
		const {data} = props
		return (
			<React.Fragment>
				<div className='application-input application-section-complete'>
					<div><h5>Name:</h5><p>{data.fname} {data.lname}</p></div>
					<div><h5>Phone Number:</h5><p>{data.phone}</p></div>
					<div><h5>Date of Birth:</h5><p>{data.birthdate}</p></div>
					<div><h5>High School:</h5><p>{data.highschool}</p></div>
					<div><h5>US Citizen/Permanent Resident:</h5><p>{data.citizen ? 'Yes' : 'No'}</p></div>
				</div>
				<button onClick={editForm} className='application-complete-edit'>Edit</button>
			</React.Fragment>
		)
	}

	return (
		<form className='application-input' onSubmit={(e) => props.handleSubmit(e, formData, true)} ref={form}> 
		    <input		
		      className="application-text-input"		      
		      type="text"
		      name="fname"	      
		      placeholder='First name'
		      value={formData.fname}
		      onChange={(e) => handleUpdateFormData(e, 'fname')}
		      required
		    />
		    <input	
		      className="application-text-input"			      
		      type="text"
		      name="lname"			  
		      placeholder='Last name'
		      value={formData.lname}
		      onChange={(e) => handleUpdateFormData(e, 'lname')}
		      required
		    />
		    <input		
		      className="application-text-input"		      
		      type="tel"
		      //pattern='^[2-9]\d{2}-\d{3}-\d{4}$'
		      name="phone"	      
		      placeholder='Phone: 123-456-7890'
		      value={formData.phone}
		      onChange={(e) => handleUpdateFormData(e, 'phone')}
		      required
		    />
		    <input		
		      className="application-text-input"		      
		      type="text"
		      ref={datePicker}		      
		      name="birthdate"	      
		      placeholder='Birthdate'
		      onFocus={() => datePicker.current.type = 'date'}
		      onBlur={() => datePicker.current.type = 'text'}
		      value={formData.birthdate}
		      onChange={(e) => handleUpdateFormData(e, 'birthdate')}
		      required
		    />
		    <input		
		      className="application-text-input full-width"		      
		      type="text"
		      name="highschool"	      
		      placeholder='High School'
		      value={formData.highschool}
		      onChange={(e) => handleUpdateFormData(e, 'highschool')}
		      required
		    />
		    <div className='application-input-radio-section'>
				<p>Are you a U.S. Citizen or Permanent Resident?</p>
				<div className='application-input-radio'>
				    <label>
					    <input		      
					      type="radio"
					      name="citizen"
					      value={true}     
					      checked={formData.citizen}
					      onChange={(e) => handleUpdateFormData(e, 'citizen')}
					    />
					    Yes
				    </label>
				    <label>
					    <input		      
					      type="radio"
					      name="citizen"
					      value=''
					      checked={!formData.citizen}	 
					      onChange={(e) => handleUpdateFormData(e, 'citizen')}     			      
					    />
					    No
				    </label>
				</div>
			</div>
			<ApplicationSubmitButtons form={form} handleSubmit={props.handleSubmit} formData={formData} handleApplicationStep={props.handleApplicationStep}/>
		</form>
	)
}

function mapStateToProps(state) {
	const complete = state.application.applicationStatus.application.contactInformation ? true : false
	return {
		complete,
		data: state.application.applicationStatus.application.contactInformation
	}
};

export default connect(mapStateToProps)(ContactInformation);

