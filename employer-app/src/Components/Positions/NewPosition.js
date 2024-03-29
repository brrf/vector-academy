import React, {useState, useEffect} from 'react';
import Select from 'react-select'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {setPositions} from '../../actions/positions';
import getPositions from '../../../utils/getPositions';
import RevisionsView from './RevisionsView';
import Warning from '../Warning';
import '../../css/newposition.css';

function NewPosition({user, dispatch, position}) {
	const [inputState, updateInputState] = useState([
		{
			focus: false,
			empty: false
		},
		{
			focus: false,
			empty: false
		},
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		},
	]);
	
	const [formData, updateFormData] = useState({
		fname: user.fname,
		lname: user.lname,
		discipline: null,
		description: '',
		city: '',
		state: '',
		other: '',
		requestedSkills: null
	});

	const [errors, updateErrors] = useState([]);
	const [redirect, triggerRedirect] = useState(false);
	const [company, updateCompany] = useState('');
	const [disciplines, updateDisciplines] = useState([
		{
			label: 'Mechanical Engineering',
			value: 'mechanical-engineering'
		},
		{
			label: 'Chemical Engineering',
			value: 'chemical-engineering'
		},
		{
			label: 'Aerospace Engineering',
			value: 'aerospace-engineering'
		},
	]);
	const [skills, updateSkills] = useState([
		{
			label: 'Intro to CAD: SolidWorks',
			value: 'intro-solidworks'
		},
		{
			label: 'Intro to CAD: Autodesk Inventor',
			value: 'intro-inventor'
		},
		{
			label: 'Intro to CAD: Creo',
			value: 'intro-creo'
		},
		{
			label: 'Intro to CAD: Catia v5',
			value: 'intro-catia-v5'
		},
		{
			label: 'Intro to CAD: Catia v6',
			value: 'intro-catia-v6'
		},
		{
			label: 'General Chemistry I',
			value: 'genchem-i'
		},
		{
			label: 'Modern Mechanics',
			value: 'modern-mechanics'
		},
		{
			label: 'Analytic Geometry and Calculus',
			value: 'calc-ii'
		},
		{
			label: 'Intro to Manufacturing',
			value: 'intro-manufacturing'
		},
		{
			label: 'Fundamentals of Biology',
			value: 'intro-bio'
		},
		{
			label: 'Intro to MatLab',
			value: 'intro-matlab'
		},
		{
			label: 'Essentials of Python',
			value: 'intro-python'
		},
		{
			label: 'Essentials of Javascript',
			value: 'intro-javascript'
		},
		{
			label: 'Essentials of PHP',
			value: 'intro-php'
		}
	]);

	useEffect(hydrateCompany, []);
	function hydrateCompany () {
	    fetch(`${PROTOCOL}${DOMAIN}/hydratecompany`, {
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
	      	updateErrors(resObject.errors);
	      } else {
	      		updateCompany(resObject.company);
	      };
	    });
	}

	useEffect(populateFields, [position]);
	function populateFields() {
		if (position && position.requestedSkills) {
			const {supervisorFname, supervisorLname, description, city, state} = position;
			let disciplineObject
			let requestedSkillsArray = [];
			disciplines.forEach(discipline => {
				if(discipline.label === position.discipline) disciplineObject = discipline;  
			})
			skills.forEach(skill => {
				if (position.requestedSkills.includes(skill.label)) requestedSkillsArray.push(skill)
			})
			updateFormData({
				fname: supervisorFname,
				lname: supervisorLname,
				description,
				discipline: disciplineObject,
				city,
				state,
				requestedSkills: requestedSkillsArray,
				other: position.other ? position.other : ''
			})
			updateInputState([
				{
					focus: false,
					empty: false
				},
				{
					focus: false,
					empty: false
				},
				{
					focus: false,
					empty: false
				},
				{
					focus: false,
					empty: false
				},
			])
		}
	}

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

	function handleSubmit(e) {
		e.preventDefault();
		updateErrors([]);
		console.log('a button!')

		const {fname, lname, discipline, state, city, description, requestedSkills} = formData
		if (!fname || !lname || !discipline || !state || !city || !description) {
			updateErrors(['Please fill out all fields']);
			return;
		} else if (!requestedSkills || requestedSkills.length !== 3) {
			updateErrors(['Please request 3 courses']);
			return;
		}

		if (position && position.approved === 1) submitRevision();
		else submitNewPosition();
	}

	function submitNewPosition() {
		fetch(`${PROTOCOL}${DOMAIN}/newposition`, {
	      method: "POST",
	      headers: { 
	        "Content-Type": "application/json",
	      },
	      body: JSON.stringify(formData),
	      mode: "cors",
	      credentials: "include"
	    })
	    .then(res => res.json())
	    .then(resObject => {
	      if (resObject.errors) {
	      	updateErrors(resObject.errors);
	      } else {		
	      		getPositions()
				.then(positions => {
					dispatch(setPositions(positions))
					triggerRedirect(true);
				});
	      };
	    });	
	}		

	function submitRevision() {
		console.log('a revision');
		fetch(`${PROTOCOL}${DOMAIN}/newposition`, {
	      method: "PUT",
	      headers: { 
	        "Content-Type": "application/json",
	      },
	      body: JSON.stringify({formData, approved: 0, positionId: position._id}),
	      mode: "cors",
	      credentials: "include"
	    })
	    .then(res => res.json())
	    .then(resObject => {
	      if (resObject.errors) {
	      	updateErrors(resObject.errors);
	      } else {		
	      		getPositions()
				.then(positions => {
					dispatch(setPositions(positions))
					triggerRedirect(true);
				});
	      };
	    });	
	};

	function handleUpdateFormData(e, field) {
		let newValue;
			
		if (field === 'requestedSkills' || field === 'discipline') {
			newValue = e	
		} else {
			newValue = e.target.value
		}
		updateFormData({
			...formData,
			[field]: newValue
		});
	}

	if (redirect) {
		return <Redirect to='/pendingpositions' />
	}

	return (
		<div className='application-form-container'>
			<Warning errors={errors} />
			<h2 className='center'>{`${position && position.approved === 1 ? 'Revised' : 'New'} ${company} Apprenticeship Position`}</h2>
			{
				position && position.revisions && position.revisions.length > 0
					? <RevisionsView revisions={position.revisions}/>
					: null
			}	
			<form className='application-input'>
				<h3 className='full-width'>Supervising Engineer</h3> 
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
				<h3 className='full-width'>Location</h3> 
				<div className='styled-row'>
				    <div className='styled-field half-width' 
							onFocus={() => handleFocus(2)}
							onBlur={() => handleBlur(2)}
							onKeyUp={(e) => handleKeyUp(e, 2)}
					>
					    <input		
					      className={`styled-input ${inputState[2].focus ? 'styled-input-focus' : ''} ${inputState[2].empty ? 'styled-input-empty' : ''}`}      
					      type="text"
					      name="city"	      
					      placeholder='Chicago'
					      value={formData.city}
					      onChange={(e) => handleUpdateFormData(e, 'city')}
					      required
					    />
					    <label className='styled-label'>City</label>
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
					      name="state"			  
					      placeholder='IL'
					      value={formData.state}
					      onChange={(e) => handleUpdateFormData(e, 'state')}
					      required
					    />
					    <label className='styled-label'>State</label>
						<div className='baseline'></div>
					</div> 
				</div>
				<h3 className='full-width'>Engineering Discipline</h3>	
				<Select
					className='select-margin'
					value={formData.discipline}
					onChange={(e) => handleUpdateFormData(e, 'discipline')}
					options={disciplines}
					isMulti={false}
				/>
				<h3 className='full-width'>Project Description</h3>
				<textarea required onChange={(e) => handleUpdateFormData(e, 'description')} value={formData.description} />
				<div className='question-word-count'>
					<p className='word-count'>{`${500 - formData.description.split(' ').length} words remaining`}</p>
				</div>
			    <h3 className='full-width'>Other Benefits (optional)</h3>
				<textarea onChange={(e) => handleUpdateFormData(e, 'other')} value={formData.other} />
				<div className='question-word-count'>
					<p className='word-count'>{`${500 - formData.other.split(' ').length} words remaining`}</p>
				</div>
				<h3 className='full-width'>Requested Skills</h3>
				<p>6 months prior to the apprentice's start date Vector will ensure preparedness by teaching the skills that are most critical for this position. Please select 3 courses for the candidate to complete.</p>
				<Select
					
					value={formData.requestedSkills}
					onChange={(e) => handleUpdateFormData(e, 'requestedSkills')}
					options={skills}
					isMulti={true}
				/>
				<div className='question-word-count'>
					{
						formData.requestedSkills
							? <p className='word-count'>{`${formData.requestedSkills.length} ${formData.requestedSkills.length === 1 ? 'skill' : 'skills'} selected`}</p>
							: <p className='word-count'>No skills selected</p>		
					}
				</div>
				<button onClick={handleSubmit}>{`${position && position.approved === 1 ? 'Revise' : 'Submit'} Position`}</button>
			</form>	
		</div>
	)
}

function mapStateToProps(state) {
  return {
  	user: state.user.user
  };
}

export default connect(mapStateToProps)(NewPosition);