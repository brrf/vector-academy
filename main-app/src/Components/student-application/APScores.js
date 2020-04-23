import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {ApplicationSubmitButtons, ApplicationEditButtons} from './ApplicationButtons';

function APScores (props) {

	const [exams, updateExams] = useState([
		{
			name: 'Physics',
			ref: 'physics',
			selected: false,
			score: ''
		},
		{
			name: 'Calculus',
			ref: 'calc',
			selected: false,
			score: ''
		},
		{
			name: 'Chemistry',
			ref: 'chem',
			selected: false,
			score: ''
		},
		{
			name: 'English',
			ref: 'english',
			selected: false,
			score: ''
		},
		{
			name: 'Computer Science',
			ref: 'compsci',
			selected: false,
			score: ''
		},
	]);

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
		}
	]);

	useEffect(() => {
		if (edit) {
			let newInputState = [...inputState];
			inputState.forEach(input => {
				input.empty = false;
			})
			updateInputState(newInputState);
		}
	}, []);

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

	const [fourSelected, isFourSelected] = useState(false);
	const [edit, updateEdit] = useState(props.complete);
	const form = useRef(null);

	//show scores container if 4 exams are selected
	useEffect(() => {

		function numberOfSelectedExams () {
		let number = 0;
		exams.forEach(exam => {
			if (exam.selected === true) {
				number++
			}
		})
		return number;
		};
		
		if (numberOfSelectedExams() >= 4) {
			isFourSelected(true);
		} else {
			isFourSelected(false)
		}
	}, [exams]);

	function returnFormData() {
		const formData = {};
		exams.forEach(exam => {
			if (exam.score) {
				formData[exam.ref] = exam.score
			}
		})
		return formData;
	}

	//get any already existing data and update local state
	useEffect(getExamData, []);
	function getExamData() {
		if (!props.data) return;
		const newState = [...exams];
		for (let testName in props.data) {
			let currentTest = newState.find(test => test.ref === testName);
			const currentTestIndex = newState.findIndex(test => test.ref === testName);
			currentTest.score = props.data[testName];
			newState[currentTestIndex] = currentTest;
		}
		updateExams(newState);
	};

	function handleUpdateExamCheckboxes(index) {
		//only allow 4 scores to be selected
		const newExamsArray = [...exams];

			newExamsArray[index] = {
				...newExamsArray[index],
				selected: !newExamsArray[index].selected
			}
			updateExams(newExamsArray);
		};

	function handleUpdateExamScore(e, ref) {
		const examIndex = exams.findIndex(exam => exam.ref === ref);
		const newExamsArray = [...exams];
		newExamsArray[examIndex] = {
			...newExamsArray[examIndex],
			score: e.target.value
		}
		updateExams(newExamsArray);
	};

	if (edit) {
		return (
			<React.Fragment>
				<div className='application-input application-section-complete'>
					{
						exams.map((test, index) => {
							return (
								<div key={test.ref}>
									<h5>{test.name}:</h5>
									<p>{test.score ? test.score : 'Not selected'}</p>
								</div>
							)
						})
					}			
				</div>
				<button onClick={(edit) => updateEdit(!edit)} className='application-complete-edit'>Edit</button>
				<ApplicationEditButtons handleApplicationStep={props.handleApplicationStep}/>
			</React.Fragment>
		)
	}


	return (		
		<React.Fragment>
			<div className='application-input ap-scores-checkbox-container'>
				<p>Choose <strong>at least 4</strong> test scores you would like to submit:</p>
				<div className='ap-scores-checkboxes'>
					{
						exams.map((exam, index) => {
							return (
								<div key={index}>
									<label>
										{exam.name}
										<input
											type='checkbox'
											checked={exams[index].selected}
											onChange={() => handleUpdateExamCheckboxes(index)}
										/>
									</label>
								</div>
							)
						})
					}
				</div>
			</div>
			{
				fourSelected
					?	<form 
							className='application-input'
							ref={form} 
							onSubmit={(e) => props.handleSubmit(e, returnFormData(), true)}
						>
							{
								exams.filter(exam => exam.selected).map((exam, index) => {
									return (
										<div className='styled-field ap-scores-score' 
												onFocus={() => handleFocus(index)}
												onBlur={() => handleBlur(index)}
												onKeyUp={(e) => handleKeyUp(e, index)}
												key={exam.ref}
										>
											<input						
												className={`styled-input ${inputState[index].focus ? 'styled-input-focus' : ''} ${inputState[index].empty ? 'styled-input-empty' : ''}`}      
												type="number"
												min="1"
												max="5"
												step="1"
												name={exam.name}	      
												placeholder='Score'
												value={exam.score}
												onChange={(e) => handleUpdateExamScore(e, exam.ref)}
												required
											/>
											<label className='styled-label'>{exam.name}</label>
											<div className='baseline'></div>
										</div>
									)
								})
							}
							<ApplicationSubmitButtons form={form} handleSubmit={props.handleSubmit} handleApplicationStep={props.handleApplicationStep} formData={returnFormData()}/>
						</form>
					: null			
			}
		</React.Fragment>
	)
};

function mapStateToProps(state) {
	const complete = state.application.applicationStatus.application.apScores ? true : false
	return {
		complete,
		data: state.application.applicationStatus.application.apScores
	}
};

export default connect(mapStateToProps)(APScores);