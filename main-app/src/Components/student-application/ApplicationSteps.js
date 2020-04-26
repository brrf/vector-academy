import React, {useState} from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle, faCheckCircle, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {setApplicationStep, completeApplicationStep} from '../../actions/application';
import ApplicationProgress from './ApplicationProgress';
import Warning from '../Warning';
import ContactInformation from './ContactInformation';
import APScores from './APScores';
import TestScore from './TestScore';
import Essay from './Essay';
import CV from './CV';
import Questions from './Questions';
import CompanySelection from './CompanySelection';
import Review from './Review';
import Payment from './Payment';

function ApplicationSteps (props) {
	const {applicationStep, application, status} = props
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
			name: 'Additional Questions',
			ref: 'questions'
		},
		{
			name: 'Company Selection',
			ref: 'companySelection'
		}
	];
	const [errors, handleErrors] = useState([]);

	function handleApplicationStep(counter) {
		handleErrors([]);
		if (applicationStep === 0 && counter === '-') {
			props.dispatch(setApplicationStep(false));
		} else if (applicationStep === 6 && counter === '+' && props.completedSteps < 7) {
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
		fetch(`${PROTOCOL}apply.${DOMAIN}/application`, {
	      method: "POST",
	      body: JSON.stringify({data, applicationStep}),
	      headers: { 
	        "Content-Type": "application/json",
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

	function handleSubmitFile (e, data, nextPage) {
		if (e) e.preventDefault();
		let formData = new FormData();
      	formData.append("cv", data);
   		formData.append("applicationStep", applicationStep);
		fetch(`${PROTOCOL}apply.${DOMAIN}/applicationfile`, {
	      method: "POST",
	      body: formData,
	      mode: "cors",
	      credentials: "include"
	    })
	    .then(res => res.json())
	    .then(resObject => {
	    	if (resObject.errors) {
	    		handleErrors(resObject.errors)
	    	} else {
	    		props.dispatch(completeApplicationStep(applicationSteps[applicationStep].ref, resObject.file));
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
			case 4: {
				return <CV handleSubmit={handleSubmitFile} handleApplicationStep={handleApplicationStep}/>
			}
			case 5: {
				return <Questions handleSubmit={handleSubmit} handleApplicationStep={handleApplicationStep}/>
			}
			case 5: {
				return <Questions handleSubmit={handleSubmit} handleApplicationStep={handleApplicationStep}/>
			}
			case 6: {
				return <CompanySelection handleSubmit={handleSubmit} handleApplicationStep={handleApplicationStep}/>
			}
			default: 
				return null;
		}
	}

	//student has already submitted an application
	if (props.status === 1) {
		return (
			<div className='application-form-container'>
				<h2 className='center'>Payment Received!</h2>	
				<p className='center' style={{marginTop: '10px'}}>We will review your application and notify you if you are selected for interviews.</p>
			</div>
		)
	}
	//applicationStep === false is the homepage; other #s are different application steps
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
			<React.Fragment>
				<ApplicationProgress />
				{
					props.completedSteps === 7
						? <button onClick={() => props.dispatch(setApplicationStep(7))} className='application-steps-button'>Submit Application</button>
						: null
				}
				<div className='application-steps-container'>
					{JSX}
				</div>
			</React.Fragment>
		);
	} else if (applicationStep === 7) {
		return (
			<Review applicationSteps={applicationSteps}/>
		)
	} else if (applicationStep === 8) {
		return (
			<Payment handleApplicationStep={handleApplicationStep} />
		)
	} else {
		return (
			<React.Fragment>
				<ApplicationProgress />
			 	<div className='application-form-container'>	
					<Warning errors={errors}/>	
					<h2 className='center'>{applicationSteps[applicationStep].name}</h2>	
					{returnApplicationStepJSX(applicationStep)}	
				</div>
			</React.Fragment>
	 	)
	}
};

function mapStateToProps(state) {
	return {
		applicationStep: state.application.applicationStatus.applicationStep,
		application: state.application.applicationStatus.application,
		userId: state.user.user.id,
		status: state.user.user.status,
		completedSteps: Object.keys(state.application.applicationStatus.application).length
	}
};

export default connect(mapStateToProps)(ApplicationSteps);
