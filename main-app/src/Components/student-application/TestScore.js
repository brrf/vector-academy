import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import ApplicationSubmitButtons from './ApplicationSubmitButtons';

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
					    <input		
					      className="application-text-input"		      
					      type="number"
					      min="400"
					      max="1600"
					      step="10"
					      name="overallScore"	      
					      placeholder='Overall Score'
					      value={formData.sat.overallScore}
					      onChange={(e) => handleUpdateFormData(e, 'overallScore')}
					      //required
					    />
					    <input	
					      className="application-text-input"			      
					      type="number"
					      min="200"
					      max="800"
					      step="10"
					      name="math"			  
					      placeholder='Math/Quant'
					      value={formData.sat.math}
					      onChange={(e) => handleUpdateFormData(e, 'math')}
					      //required
					    />
					    <input		
					      className="application-text-input"		      
					      type="number"
					      min="200"
					      max="800"
					      step="20"
					      name="verbal"	      
					      placeholder='Verbal/Critical Reading'
					      value={formData.sat.verbal}
					      onChange={(e) => handleUpdateFormData(e, 'verbal')}
					      //required
					    />
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

