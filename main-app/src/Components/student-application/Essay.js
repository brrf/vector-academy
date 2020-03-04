import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import ApplicationSubmitButtons from './ApplicationSubmitButtons';

function Essay (props) {

	const [formData, updateFormData] = useState({
		essay: '',
		selection: null
	})

	const [edit, updateEdit] = useState(props.complete);
	const form = useRef(null);

	function handleUpdateFormData(field, value) {
		if (field === 'essay' && (value.split(' ').length > 650)) {
			return;
		} else {
			updateFormData({
				...formData,
				[field]: value
			})
		}
	}

	const prompts = [
		'Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.',
		'The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?',
		' Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?',
		'Describe a problem you\'ve solved or a problem you\'d like to solve. It can be an intellectual challenge, a research query, an ethical dilemma - anything that is of personal importance, no matter the scale. Explain its significance to you and what steps you took or could be taken to identify a solution.',
		'Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.',
		'Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?',
		'Share an essay on any topic of your choice. It can be one you\'ve already written, one that responds to a different prompt, or one of your own design.'
	];

	function Radio (props) {
		return (
			<div className='application-input radio-center'>
				<h3 style={{color: '#19225C', marginBottom: '1vw'}} className={formData.selection !== null ? 'hidden' : null}>Please choose your essay prompt:</h3>
				<div className='application-input-radio-section column'>
					{
						prompts.map((prompt, index) => {
							return (
								<label key={index} className={formData.selection !== null ? 'hidden' : null}>
								    <input		      
								      type="radio"
								      name="prompt"
								      value={index}   
								      checked={formData.selection === index}
								      onChange={() => handleUpdateFormData('selection', index)}
								    />
								    {
								    	prompt
								    }
							    </label>
							)
						})
					}
					<div className={`essay-input-prompt-container ${formData.selection !== null ? null : 'hidden'}`}>
						<p>{prompts[formData.selection]}</p>
						<span onClick={() => handleUpdateFormData('selection', null)}>x</span>
					</div>
				</div>
			</div>
		)
	}

	//get any already existing data and update local state
	useEffect(getFormData, []);
	function getFormData () {
		if (!props.data) return;
		console.log({data: props.data});
		updateFormData(props.data);
	};

	if (edit) {
		return (
			<React.Fragment>
				<div className='application-input application-section-complete'>
					<h3>{prompts[formData.selection]}</h3>
					<div className='edit-textarea-complete'>{formData.essay}</div>
				</div>
				<button onClick={(edit) => updateEdit(!edit)} className='application-complete-edit'>Edit</button>
			</React.Fragment>
		)
	}


	return (		
		<React.Fragment>
			<div className='application-input essay'>
				<p>Vector uses the standard Common App essay prompts. Please select your preferred essay prompt below and feel free to reuse any content you have already written for the Common App. Maximum length is 650 words.</p>
				<Radio />
				{
					formData.selection !== null
						? <form onSubmit={(e) => props.handleSubmit(e, formData, true)} ref={form}>
							<textarea onChange={(e) => handleUpdateFormData('essay', e.target.value)} value={formData.essay} />
							<div><p>{`${650 - formData.essay.split(' ').length} words remaining`}</p></div>
							<ApplicationSubmitButtons form={form} handleSubmit={props.handleSubmit} formData={formData} handleApplicationStep={props.handleApplicationStep} />
						</form>
						: null
				}
			</div>
		</React.Fragment>
	)
};

function mapStateToProps(state) {
	const complete = state.application.applicationStatus.application.essay ? true : false
	return {
		complete,
		data: state.application.applicationStatus.application.essay
	}
};

export default connect(mapStateToProps)(Essay);