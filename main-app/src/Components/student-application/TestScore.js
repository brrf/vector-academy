import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {ApplicationSubmitButtons, ApplicationEditButtons} from './ApplicationButtons';

function TestScore (props) {
	const [formData, updateFormData] = useState({
		sat: {
			overallScore: '',
			math: '',
			verbal: ''
		},
		act: {
			english: '',
			math: '',
			reading: '',
			science: ''
		}
	});
	const [testOption, updateTestOption] = useState(undefined);
	const [edit, updateEdit] = useState(props.complete);
	const form1 = useRef(null);
	const form2 = useRef(null);

	function handleUpdateFormData(e, field) {
		updateFormData({
			...formData,
			[testOption]: {
				...formData[testOption],
				[field]: e.target.value
			}
		})
	};

	useEffect(getFormData, []);
	function getFormData() {
		if (!props.data) return;
		if (props.data.testOption === 'sat') {
			updateTestOption('sat');
			const {overallScore, math, verbal} = props.data;
			updateFormData({
				...formData,
				sat: {
					overallScore,
					math,
					verbal
				}
			});		
		} else if (props.data.testOption === 'act') {
			updateTestOption('act');
			const {english, math, reading, science} = props.data;
			updateFormData({
				...formData,
				act: {
					english,
					math,
					reading,
					science
				}				
			});
		}; 				
	};

	const [inputStateSat, updateInputStateSat] = useState([
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
	]);

	const [inputStateAct, updateInputStateAct] = useState([
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
	]);

	useEffect(() => {
		if (edit) {
			let newInputStateSat = [...inputStateSat];
			inputStateSat.forEach(input => {
				input.empty = false;
			})
			updateInputStateSat(newInputStateSat);

			let newInputStateAct = [...inputStateAct];
			inputStateAct.forEach(input => {
				input.empty = false;
			})
			updateInputStateAct(newInputStateAct);
		}
	}, []);

	function handleFocus(index, test) {
		let newState;
		let func;
		if (test === 'sat') {
			newState = [...inputStateSat]
			func = updateInputStateSat
		} else {
			newState = [...inputStateAct]
			func = updateInputStateAct
		}
		newState[index] = {
			...newState[index],
			focus: true
		}
		func(newState);
	};

	function handleBlur(index, test) {
		let newState;
		let func;
		if (test === 'sat') {
			newState = [...inputStateSat]
			func = updateInputStateSat
		} else {
			newState = [...inputStateAct]
			func = updateInputStateAct
		}	
		newState[index] = {
			...newState[index],
			focus: false
		}
		func(newState);
	};

	function handleKeyUp(e, index, test) {
		let newState;
		let func;
		if (test === 'sat') {
			newState = [...inputStateSat]
			func = updateInputStateSat
		} else {
			newState = [...inputStateAct]
			func = updateInputStateAct
		}
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
		func(newState);
	};

	function editForm() {
		updateEdit(!edit);
	}

	if (edit) {
		return (		
			testOption === 'sat'
			?	<React.Fragment>
					<div className='application-input application-section-complete'>
						<div><h5>Test:</h5><p>SAT</p></div>
						<div><h5>Overall Score:</h5><p>{formData.sat.overallScore}</p></div>
						<div><h5>Math/Quant:</h5><p>{formData.sat.math}</p></div>
						<div><h5>Verbal/Critical Reading:</h5><p>{formData.sat.verbal}</p></div>					
					</div>
					<button onClick={editForm} className='application-complete-edit'>Edit</button>
					<ApplicationEditButtons handleApplicationStep={props.handleApplicationStep}/>
				</React.Fragment>
			: 	<React.Fragment>
					<div className='application-section-complete'>
						<div><h5>Test:</h5><p>ACT</p></div>
						<div><h5>English:</h5><p>{formData.act.english}</p></div>
						<div><h5>Mathematics:</h5><p>{formData.act.math}</p></div>
						<div><h5>Reading:</h5><p>{formData.act.reading}</p></div>
						<div><h5>Science & Reasoning:</h5><p>{formData.act.science}</p></div>					
					</div>
					<button onClick={() => updateEdit(!edit)} className='application-complete-edit'>Edit</button>
					<ApplicationEditButtons handleApplicationStep={props.handleApplicationStep}/>
				</React.Fragment>			
		)
	}

	function Radio (props) {
		return (
			<div className='application-input application-input-radio-section radio-center'>
				<p>Please choose your standardized test option:</p>
				<div className='application-input-radio'>
				    <label>
					    <input		      
					      type="radio"
					      name="testOption"
					      value='sat'     
					      checked={testOption === 'sat'}
					      onChange={() => updateTestOption('sat')}
					    />
					    SAT
				    </label>
				    <label>
					    <input		      
					      type="radio"
					      name="testOption"
					      value='act'
					      checked={testOption === 'act'}	 
					      onChange={() => updateTestOption('act')}     			      
					    />
					    ACT
				    </label>
				</div>
			</div>
		)
	}
	return (
		<React.Fragment>
			<Radio />
			{
				//if no test option - return nothing; otherwise return the selected test option
				testOption !== undefined
				? testOption === 'sat'
					? <form ref={form1} onSubmit={(e) => props.handleSubmit(e, {...formData[testOption], testOption}, true)}> 
					    <div className='styled-field test-scores-score' 
							onFocus={() => handleFocus(0, 'sat')}
							onBlur={() => handleBlur(0, 'sat')}
							onKeyUp={(e) => handleKeyUp(e, 0, 'sat')}
						>
						    <input		
						      className={`styled-input ${inputStateSat[0].focus ? 'styled-input-focus' : ''} ${inputStateSat[0].empty ? 'styled-input-empty' : ''}`}      	      
						      type="number"
						      min="400"
						      max="1600"
						      step="10"
						      name="overallScore"	      
						      placeholder='Score'
						      value={formData.sat.overallScore}
						      onChange={(e) => handleUpdateFormData(e, 'overallScore')}
						      required
						    />
						    <label className='styled-label'>Overall Score</label>
							<div className='baseline'></div>
						</div>
						<div className='styled-field test-scores-score' 
							onFocus={() => handleFocus(1, 'sat')}
							onBlur={() => handleBlur(1, 'sat')}
							onKeyUp={(e) => handleKeyUp(e, 1, 'sat')}
						>
						    <input	
						      className={`styled-input ${inputStateSat[1].focus ? 'styled-input-focus' : ''} ${inputStateSat[1].empty ? 'styled-input-empty' : ''}`}      	      			      
						      type="number"
						      min="200"
						      max="800"
						      step="10"
						      name="math"			  
						      placeholder='Score'
						      value={formData.sat.math}
						      onChange={(e) => handleUpdateFormData(e, 'math')}
						      required
						    />
						    <label className='styled-label'>Math/Quant</label>
							<div className='baseline'></div>
						</div>
						<div className='styled-field test-scores-score' 
							onFocus={() => handleFocus(2, 'sat')}
							onBlur={() => handleBlur(2, 'sat')}
							onKeyUp={(e) => handleKeyUp(e, 2, 'sat')}
						>
						    <input		
						      className={`styled-input ${inputStateSat[2].focus ? 'styled-input-focus' : ''} ${inputStateSat[2].empty ? 'styled-input-empty' : ''}`}      	      	      
						      type="number"
						      min="200"
						      max="800"
						      step="20"
						      name="verbal"	      
						      placeholder='Score'
						      value={formData.sat.verbal}
						      onChange={(e) => handleUpdateFormData(e, 'verbal')}
						      required
						    />
						    <label className='styled-label'>Verbal/Critical Reading</label>
							<div className='baseline'></div>
						</div>
					    <ApplicationSubmitButtons form={form1} handleSubmit={props.handleSubmit} formData={{...formData[testOption], testOption}} handleApplicationStep={props.handleApplicationStep}/>
					</form>
					:	<form onSubmit={(e) => props.handleSubmit(e, {...formData[testOption], testOption}, true)} ref={form2}> 
						    <input		
						      className="application-text-input"		      	
						      type="number"
						      min="1"
						      max="36"
						      step="1"
						      name="english"	      
						      placeholder='English'
						      value={formData.act.english}
						      onChange={(e) => handleUpdateFormData(e, 'english')}
						      //required
						    />
						    <input	
						      className="application-text-input"			      
						      type="number"
						      min="1"
						      max="36"
						      step="1"
						      name="math"			  
						      placeholder='Mathematics'
						      value={formData.act.math}
						      onChange={(e) => handleUpdateFormData(e, 'math')}
						      //required
						    />
						    <input		
						      className="application-text-input"		      
						      type="number"
						      min="1"
						      max="36"
						      step="1"
						      name="reading"	      
						      placeholder='Reading'
						      value={formData.act.reading}
						      onChange={(e) => handleUpdateFormData(e, 'reading')}
						      //required
						    />
						    <input		
						      className="application-text-input"		      
						      type="number"
						      min="1"
						      max="36"
						      step="1"
						      name="science"	      
						      placeholder='Science & Reasoning'
						      value={formData.act.science}
						      onChange={(e) => handleUpdateFormData(e, 'science')}
						      //required
						    />
						    <ApplicationSubmitButtons handleSubmit={props.handleSubmit} formData={{...formData[testOption], testOption}} form={form2} handleApplicationStep={props.handleApplicationStep}/>
						</form>
				: null
			}
		</React.Fragment>
	)
}

function mapStateToProps(state) {
	const complete = state.application.applicationStatus.application.testScore ? true : false
	return {
		complete,
		data: state.application.applicationStatus.application.testScore
	}
};

export default connect(mapStateToProps)(TestScore);

