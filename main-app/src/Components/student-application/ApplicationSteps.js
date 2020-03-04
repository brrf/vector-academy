import React, {useState} from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle, faCheckCircle, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {setApplicationStep, completeApplicationStep, getApplication} from '../../actions/application';
import {getUser} from '../../actions/user';
import Warning from '../Warning';
import ContactInformation from './ContactInformation';
import APScores from './APScores';
import TestScore from './TestScore';
import Essay from './Essay';

function ApplicationSteps (props) {
	const {applicationStep, application} = props
	const applicationSteps = [
		{
			name: 'Contact Information',
			ref: 'contactInformation'
		},
		{
			name: 'AP Scores',
			ref: 'apScores'
		},
		{
			name: 'SAT/ACT Score',
			ref: 'testScore',
		},
		{
			name: 'Essay',
			ref: 'essay'
		},
		{
			name: 'CV',
			ref: 'cv'
		},
		{
			name: 'Hobbies',
			ref: 'hobbies'
		},
		{
			name: 'Projects',
			ref: 'projects'
		} 
	];
	const [errors, handleErrors] = useState([]);

	function handleApplicationStep(counter) {
		handleErrors([]);
		if (applicationStep === 0 && counter === '-') {
			props.dispatch(setApplicationStep(false));
		} else if (counter === '+') {
			props.dispatch(setApplicationStep(applicationStep + 1))
		} else if (counter === '-') {
			props.dispatch(setApplicationStep(applicationStep - 1))
		} else {
			props.dispatch(setApplicationStep(counter))
		}
	}

	function handleSubmit(e, data, nextPage) {
		if (e) e.preventDefault();
		fetch("http://apply.localhost:3001/application", {
	      method: "POST",
	      body: JSON.stringify({data, applicationStep}),
	      headers: { 
	        "Content-Type": "application/json",
	        "Access-Control-Allow-Origin": "http://localhost:3000" 
	      },
	      mode: "cors",
	      credentials: "include"
	    })
	    .then(res => res.json())
	    .then(resObject => {
	    	if (resObject.errors) {
	    		handleErrors(resObject.errors)
	    	} else {
	    		props.dispatch(completeApplicationStep(applicationSteps[applicationStep].ref, data));
	    		if (nextPage) {
	    			handleApplicationStep('+')
	    		} else {
	    			handleApplicationStep(false)
	    		}	
	    	}
	    })
	} 

	function returnApplicationStepJSX(applicationStep) {
		switch(applicationStep) {
			case 0: {
				return <ContactInformation handleSubmit={handleSubmit} handleApplicationStep={handleApplicationStep}/>
			}
			case 1: { 
				return <APScores handleSubmit={handleSubmit} handleApplicationStep={handleApplicationStep}/>
			}
			case 2: { 
				return <TestScore handleSubmit={handleSubmit} handleApplicationStep={handleApplicationStep}/>
			}
			case 3: {
				return <Essay handleSubmit={handleSubmit} handleApplicationStep={handleApplicationStep} />
			}
			default: 
				return null;
		}
	}

	if (applicationStep === false) {
		let JSX = applicationSteps.map((step, index) => {
			return (
				<div key={step.name} className='application-step' onClick={() => handleApplicationStep(index)}>
					<div>
						<FontAwesomeIcon
							icon={application[step.ref] ? faCheckCircle : faTimesCircle }
							size="1x"
							className={`application-step-status ${application[step.ref] ? 'complete' : 'incomplete'}`}
	          			/>
	          			<p>{step.name}</p>
	          		</div>
          			<FontAwesomeIcon
		                icon={faArrowRight}
		                size="1x"
		                className='application-step-start'
          			/>
          		</div>
			)
		});
		return (
			<div className='application-steps-container'>
				{JSX}
			</div>
		);
	} else {
		return (
		 	<div className='application-form-container'>	
				<Warning temp={true} errors={errors}/>	
				<h2 className='center'>{applicationSteps[applicationStep].name}</h2>	
				{returnApplicationStepJSX(applicationStep)}	
			</div>
	 	)
	}
};

function mapStateToProps(state) {
	return {
		applicationStep: state.application.applicationStatus.applicationStep,
		application: state.application.applicationStatus.application,
		userId: state.user.user.id
	}
};

export default connect(mapStateToProps)(ApplicationSteps);
