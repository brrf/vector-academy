import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {ApplicationSubmitButtons, ApplicationEditButtons} from './ApplicationButtons';

function Questions (props) {

	const [formData, updateFormData] = useState({
		why: '',
		what: '',
		where: ''
	})

	const [edit, updateEdit] = useState(props.complete);
	const form = useRef(null);

	function handleUpdateFormData(field, value, wordLimit) {
		if (value.split(' ').length > wordLimit) {
			return;
		} else {
			updateFormData({
				...formData,
				[field]: value
			});
		}
	};

	const prompts = [
		'Vector approaches education by combining practical experience with an online academic curriculum. In 500 words or less, explain why you would thrive in this environment compared to a traditional undergraduate college education.',
		'Enrolling at a Vector company requires a interest in the field of Engineering. In 500 words or less, please explain why you are interested in engineering. If you have worked on an engineering project or solved a difficult engineering problem, please include this in your response.',
		'Currently it is only possible to become a Professional Engineer in 11 US states through work experience. These states are: Arizona, California, Georgia, Hawaii, Indiana, Maryland, New Hampshire, New York, Pennsylvania, Vermont and Washington State. In 300 words or less, please describe any ties you have to these states, or provide a rationale as to why you are comfortable with these options.'
	];

	//get any already existing data and update local state
	useEffect(getFormData, []);
	function getFormData () {
		if (!props.data) return;
		updateFormData(props.data);
	};

	if (edit) {
		return (
			<React.Fragment>
				<div className='application-input application-section-complete'>
					<h3 className='prompt-edit'>{prompts[0]}</h3>
					<div className='edit-textarea-complete'>"{formData.why}"</div>
					<h3 className='prompt-edit'>{prompts[1]}</h3>
					<div className='edit-textarea-complete'>"{formData.what}"</div>
					<h3 className='prompt-edit'>{prompts[2]}</h3>
					<div className='edit-textarea-complete'>"{formData.where}"</div>
				</div>
				<button onClick={(edit) => updateEdit(!edit)} className='application-complete-edit'>Edit</button>
				<ApplicationEditButtons handleApplicationStep={props.handleApplicationStep}/>
			</React.Fragment>
		)
	}

	return (		
		<React.Fragment>
			<div className='application-input'>
				<h3 className='center' style={{marginBottom: '1vw'}}>The following questions are designed to assess whether you may be an appropriate fit for the Vector program. Please approach them thoughtfully and honestly.</h3>		
				<form onSubmit={(e) => props.handleSubmit(e, formData, true)} ref={form}>
					<p className='question-prompt'>{prompts[0]}</p>
					<textarea required onChange={(e) => handleUpdateFormData('why', e.target.value, 500)} value={formData.why} />
					<div className='question-word-count'><p className='word-count'>{`${500 - formData.why.split(' ').length} words remaining`}</p></div>
					<p className='question-prompt'>{prompts[1]}</p>
					<textarea required onChange={(e) => handleUpdateFormData('what', e.target.value, 500)} value={formData.what} />
					<div className='question-word-count'><p className='word-count'>{`${500 - formData.what.split(' ').length} words remaining`}</p></div>
					<p className='question-prompt'>{prompts[2]}</p>
					<textarea required onChange={(e) => handleUpdateFormData('where', e.target.value, 300)} value={formData.where} />
					<div className='question-word-count'><p className='word-count'>{`${300 - formData.where.split(' ').length} words remaining`}</p></div>
					<ApplicationSubmitButtons form={form} handleSubmit={props.handleSubmit} formData={formData} handleApplicationStep={props.handleApplicationStep} />
				</form>
			</div>
		</React.Fragment>
	)
};

function mapStateToProps(state) {
	const complete = state.application.applicationStatus.application.questions ? true : false
	return {
		complete,
		data: state.application.applicationStatus.application.questions
	}
};

export default connect(mapStateToProps)(Questions);