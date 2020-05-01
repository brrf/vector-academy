import React, {useState, useEffect}  from 'react';
import { connect } from "react-redux";
import logo from '../images/Vector-01.png';
import '../css/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {setApplicationStep} from '../actions/application.js';

function Navbar (props) {
	const [firstIncomplete, setFirstIncomplete] = useState(null);

	function logout () {
		fetch(`${PROTOCOL}${DOMAIN}/studentlogout`, {
			method: "GET",
			headers: { 
			"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include"
			})
		.then(res => res.json())
		.then(resObject => {
			if (resObject.error) {
				alert('An error occurred on logout');
			} else {
				props.toggleLogin(false);
			}
		})
	}

	function handleToggleUserOptions(e) {
		props.toggleUserOptions(!props.userOptionsHidden);
		e.stopPropagation();
	}

	function handleHomeButton (step) {
		props.dispatch(setApplicationStep(step));
	}

	function findFirstIncomplete() {
		const applicationSteps = ['contactInformation', 'apScores', 'testScore', 'essay', 'cv', 'questions'];
		for (let i = 0; i < applicationSteps.length; i++) {
			if(!props.completedSteps.includes(applicationSteps[i])) {
				setFirstIncomplete(i);
				return;
			};
		};
	};
	useEffect(findFirstIncomplete, [props.completedSteps]);
	
	const {applicationStep, completedSteps, status} = props;
	let button = {
		text: 'Start Application',
		applicationStep: false
	};
	if (completedSteps.length === 7 && applicationStep === false) {
		button.text = 'Submit Application';
		button.applicationStep = 7;
	} else if (completedSteps.length === 0 && applicationStep === false) {
		button.text = 'Start Application'
		button.applicationStep = 0; 
	} else if (completedSteps.length !== 0 && applicationStep === false) {
		button.text = 'Continue Application';
		button.applicationStep = firstIncomplete;
	} else {
		button.text = 'Application Home';
		button.applicationStep = false;
	}
	return (
		<div id='navbar-container'>
			<img alt='logo' src={logo} className='logo' />
			<div className='navbar-right'>
				{
					props.status === 0
						? <button onClick={() => handleHomeButton(button.applicationStep)}>{button.text}</button>
						: null
				}
             	<div className='navbar-user-container' onClick={handleToggleUserOptions}>
             		<FontAwesomeIcon
		                icon={faUserCircle}
		                className='navbar-user'
          			/>
             		<div onClick={logout} className={`navbar-user-options ${props.userOptionsHidden ? 'hidden' : null}`}>Logout</div>
             	</div>
             </div>
		</div>
	)
}

function mapStateToProps(state) {
	return {		
		applicationStep: state.application.applicationStatus.applicationStep,
		completedSteps: Object.keys(state.application.applicationStatus.application),
		status: state.user.user.status
	}
}

export default connect(mapStateToProps)(Navbar);

