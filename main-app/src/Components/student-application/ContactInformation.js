import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {ApplicationSubmitButtons, ApplicationEditButtons} from './ApplicationButtons';

function ContactInformation (props) {
	const [inputState, updateInputState] = useState([
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		}
	]);
	
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

	useEffect(() => {
		if (edit) {
			let newInputState = [...inputState];
			inputState.forEach(input => {
				input.empty = false;
			})
			updateInputState(newInputState);
		}
	}, []);

	function handleUpdateFormData(e, field) {
		if (field === 'birthdate') {
			console.log(e.target.value);
		}
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
	};

	function handleFocus(index) {
		let newState = [...inputState];
		newState[index] = {
			...newState[index],
			focus: true
		}
		updateInputState(newState);
	};

	function handleBlur(index) {
		let newState = [...inputState];
		newState[index] = {
			...newState[index],
			focus: false
		}
		updateInputState(newState);
	};

	function handleKeyUp(e, index) {
		let newState = [...inputState];
		if(e.target.value.length === 0) {
			newState[index] = {
				...newState[index],
				empty: true
			}
		} else {
			newState[index] = {
				...newState[index],
				empty: false
			}
		}
		updateInputState(newState);
	};

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
				<ApplicationEditButtons handleApplicationStep={props.handleApplicationStep}/>
			</React.Fragment>
		)
	}

	return (
		<form className='application-input' onSubmit={(e) => props.handleSubmit(e, formData, true)} ref={form}> 
		    <div className='styled-row'>
			    <div className='styled-field half-width' 
						onFocus={() => handleFocus(0)}
						onBlur={() => handleBlur(0)}
						onKeyUp={(e) => handleKeyUp(e, 0)}
				>
				    <input		
				      className={`styled-input ${inputState[0].focus ? 'styled-input-focus' : ''} ${inputState[0].empty ? 'styled-input-empty' : ''}`}      
				      type="text"
				      name="fname"	      
				      placeholder='Peter'
				      value={formData.fname}
				      onChange={(e) => handleUpdateFormData(e, 'fname')}
				      required
				    />
				    <label className='styled-label'>First Name</label>
					<div className='baseline'></div>
				</div>
				<div className='styled-field half-width' 
						onFocus={() => handleFocus(1)}
						onBlur={() => handleBlur(1)}
						onKeyUp={(e) => handleKeyUp(e, 1)}
				>
					<input	
				      className={`styled-input ${inputState[1].focus ? 'styled-input-focus' : ''} ${inputState[1].empty ? 'styled-input-empty' : ''}`}      	      
				      type="text"
				      name="lname"			  
				      placeholder='Parker'
				      value={formData.lname}
				      onChange={(e) => handleUpdateFormData(e, 'lname')}
				      required
				    />
				    <label className='styled-label'>Last Name</label>
					<div className='baseline'></div>
				</div>
			</div>
		    <div className='styled-row'>
			    <div className='styled-field half-width' 
						onFocus={() => handleFocus(2)}
						onBlur={() => handleBlur(2)}
						onKeyUp={(e) => handleKeyUp(e, 2)}
				>
				    <input		
				      className={`styled-input ${inputState[2].focus ? 'styled-input-focus' : ''} ${inputState[2].empty ? 'styled-input-empty' : ''}`}      	      
				      type="tel"
				      pattern='^[2-9]\d{2}-?\d{3}-?\d{4}$'
				      name="phone"	      
				      placeholder='123-456-7890'
				      value={formData.phone}
				      onChange={(e) => handleUpdateFormData(e, 'phone')}
				      required
				    />
				    <label className='styled-label'>Phone Number</label>
					<div className='baseline'></div>
				</div>
				<div className='styled-field half-width' 
						onFocus={() => handleFocus(3)}
						onBlur={() => handleBlur(3)}
						onKeyUp={(e) => handleKeyUp(e, 3)}
				>
				    <input		
				      className={`styled-input ${inputState[3].focus ? 'styled-input-focus' : ''} ${inputState[3].empty ? 'styled-input-empty' : ''}`}      	      
				      type="text"
				      ref={datePicker}		      
				      name="birthdate"
				      placeholder='YYYY-MM-DD'	      
				      onFocus={() => datePicker.current.type = 'date'}
				      onBlur={() => datePicker.current.type = 'text'}
				      value={formData.birthdate}
				      onChange={(e) => handleUpdateFormData(e, 'birthdate')}
				      required
					/>
					<label className='styled-label'>Birthdate</label>
					<div className='baseline'></div>
				</div>
			</div>
		    <div className='styled-row'>
			    <div className='styled-field' 
						onFocus={() => handleFocus(4)}
						onBlur={() => handleBlur(4)}
						onKeyUp={(e) => handleKeyUp(e, 4)}
				>
				    <input		
				       className={`styled-input ${inputState[4].focus ? 'styled-input-focus' : ''} ${inputState[4].empty ? 'styled-input-empty' : ''}`}      	      	      
				      type="text"
				      name="highschool"	      
				      placeholder='Midtown High School'
				      value={formData.highschool}
				      onChange={(e) => handleUpdateFormData(e, 'highschool')}
				      required
				    />
				    <label className='styled-label'>High School</label>
					<div className='baseline'></div>
				</div>
			</div>
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

