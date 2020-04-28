import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf';
import {setApplicationStep} from '../../actions/application';

function Review ({applicationSteps, data, dispatch}) {
	const container = useRef(null);
	const [pdfWidth, updatePdfWidth] = useState(0);
	const [pdf, updatePdf] = useState(null);
	useEffect(() => updatePdfWidth(container.current.offsetWidth), []);
	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])

	useEffect(getPdf, []);
	function getPdf () {
		fetch(`${PROTOCOL}apply.${DOMAIN}/cv`, {
	      method: "GET",
	      headers: { 
	        "Content-Type": "application/pdf",
	      },
	      mode: "cors",
	      credentials: "include"
	    })
	    .then(res => res.blob())
	    .then(blob => {
	    	updatePdf(blob);
	    });
	};

	function returnStepJSX (step) {
		switch (step) {
			case 0: {
				const {fname, lname, highschool, birthdate, citizen, phone} = data.contactInformation
				return (
					<React.Fragment>
						<p>{fname} {lname}</p>
						<p>{highschool}</p>
						<p>{birthdate}</p>
						<p>Phone Number: {phone}</p>
						<p>US Citizen: {citizen ? 'Yes' : 'No'}</p>
					</React.Fragment>
				)
			}
			case 1: {
				const apData = Object.entries(data.apScores);
				const labels = {
					physics: 'Physics',
					calc: 'Calculus',
					chem: 'Chemistry',
					english: 'English',
					compsci: 'Computer Science'
				};
				const markup = apData.map((test, index) => {
					return (
						<p key={index}>{labels[test[0]]}: {test[1]}</p>
					)
				})
				return markup;
			}
			case 2: {
				let labels;
				let markup;
				const testData = Object.entries(data.testScore);

				if (data.testScore.testOption === 'act') {
					labels = {
						english: 'English',
						math: 'Mathematics',
						reading: 'Reading',
						science: 'Science',
					};			
				} else if (data.testScore.testOption === 'sat') {
					labels = {
						overallScore: 'Overall Score',
						math: 'Mathematics',
						verbal: 'Verbal Reasoning'
					}
				}
				markup = testData.map((score, index) => {
					if (score[0] === 'testOption') return null;
					return (
						<p key={index}>{labels[score[0]]}: {score[1]}</p>
					)
				})
				return markup;
			}
			case 3: {
				const prompts = [
					'Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.',
					'The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?',
					' Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?',
					'Describe a problem you\'ve solved or a problem you\'d like to solve. It can be an intellectual challenge, a research query, an ethical dilemma - anything that is of personal importance, no matter the scale. Explain its significance to you and what steps you took or could be taken to identify a solution.',
					'Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.',
					'Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?',
					'Share an essay on any topic of your choice. It can be one you\'ve already written, one that responds to a different prompt, or one of your own design.'
				];

				return (
					<div>
						<h3 className='prompt-edit'>{prompts[data.essay.selection]}</h3>
						<p className='edit-textarea-complete'>{data.essay.essay}</p>
					</div>
				)
			}
			case 4: {
				return (
					<Document
			          file={pdf}
			          options={{ withCredentials: true }}
			        >
			        	<Page pageNumber={1} width={0.8 * pdfWidth}/>
			        </Document>
				)
			}
			case 5: {
				const prompts = {
					why: 'Vector approaches education by combining practical experience with an online academic curriculum. In 500 words or less, explain why you would thrive in this environment compared to a traditional undergraduate college education.',
					what: 'Enrolling at a Vector company requires a interest in the field of Engineering. In 500 words or less, please explain why you are interested in engineering. If you have worked on an engineering project or solved a difficult engineering problem, please include this in your response.',
					where: 'Currently it is only possible to become a Professional Engineer in 11 US states through work experience. These states are: Arizona, California, Georgia, Hawaii, Indiana, Maryland, New Hampshire, New York, Pennsylvania, Vermont and Washington State. In 300 words or less, please describe any ties you have to these states, or provide a rationale as to why you are comfortable with these options.'
				};
				const questionsData = Object.entries(data.questions);
				const markup = questionsData.map((question, index) => {
					return (
						<div key={index}>
							<h3 className='prompt-edit'>{prompts[question[0]]}</h3>
							<p className='edit-textarea-complete'>"{question[1]}"</p>
						</div>
					)
				})
				return markup;
			}
			default: {
				return (
					<p>An error occurred</p>
				)
			}
		}
	}

	return (
		<div ref={container} className='application-form-container'>
			<h2 className='center'>Review Application</h2>
			{
				applicationSteps.map((step, index) => {
					return (
						<div className='review-section' key={step.name}>
							<h3>{step.name}</h3>
							{
								returnStepJSX(index)
							}
						</div>
					)
				})
			}
			<button onClick={() => dispatch(setApplicationStep(8))}>Continue to payment</button>
		</div>
	)
};

function mapStateToProps(state) {
	return {
		data: state.application.applicationStatus.application
	}
};

export default connect(mapStateToProps)(Review);