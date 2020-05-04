import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Select from 'react-select';
import {setPositions} from '../../actions/positions';
import getPositions from '../../../utils/getPositions';
import Warning from '../Warning';
import {connect} from 'react-redux';
import '../../css/position.css';

function RevisePositionVector({position, dispatch}) {
	const [formData, updateFormData] = useState([]);
	const [selectedFields, updateSelectedFields] = useState(null);
	const [errors, updateErrors] = useState([]);
	const [redirect, triggerRedirect] = useState(false);
	const fields = [
		{
			label: 'Name',
			value: 'name'
		},
		{
			label: 'Location',
			value: 'location'
		},
		{
			label: 'Description',
			value: 'description'
		},
		{
			label: 'Other',
			value: 'other'
		},
	];

	useEffect(() => {
		let dataObject = [];
		if (selectedFields) {
			selectedFields.forEach(field => {
				dataObject.push({
					label: field.label,
					message: ''
				})
			})
		};
		updateFormData(dataObject);
	}, [selectedFields]);

	function handleUpdateFormData (e, index) {
		let newData = [...formData];
		newData[index].message = e.target.value;
		updateFormData(newData);
	}

	function handleSubmit (e) {
		e.preventDefault();

		if(formData.length === 0) {
			updateErrors(['Please select a field for revision']);
			return;
		} else {
			formData.forEach(section => {
				if (!section.message) {
					updateErrors(['Suggestion cannot be empty']);
					return;
				};
			});
		};

		const accept = confirm('Are you sure you want to request revision of this position?');
		if (accept) {
			fetch(`${PROTOCOL}${DOMAIN}/newposition`, {
		      method: "PUT",
		      body: JSON.stringify({
		      	companyId: position.company,
		      	positionId: position._id,
		      	approved: 1,
		      	formData
		      }),
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
					updateErrors(resObject.errors);
				} else {
					getPositions()
					.then(positions => dispatch(setPositions(positions)));
					triggerRedirect(true);
				}
			});
		};
	};

	if (redirect) {
		return <Redirect to='/pendingpositions' />
	}

	// style for Select component
	// const customStyles = {
	// 	clearIndicator: provided => ({
	// 		fontSize: '500px',
	// 		color: 'crimson'
	// 	})
	  // control: (provided) => ({
	  // 	fontSize: '1.6vw'
	  // })
	  // placeholder: (provided) => ({
	  //   ...provided,
	  //   fontSize: '1.6vw'
	  // }),
	  // indicatorsContainer: (provided) => ({
	  // 	...provided,
	  // 	fontSize: '17vw',
	  // 	color: 'crimson',
	  // 	height: '17vw'
	  // }),
	  // // multiValueContainer: (provided) => ({
	  // // 	...provided,
	  // // 	width: '10vw',
	  // // 	height: '20vw'
	  // // }),
	  // // multiValueLabel: (provided) => ({
	  // // 	...provided,
	  // // 	color: 'crimson',
	  // // 	fontSize: '1.6vw'
	  // // }),
	  // option: (provided) => ({
	  // 	...provided,
	  // 	fontSize: '1.6vw'
	  // }),
	  // container: (provided) => ({
	  // 	...provided,
	  // 	marginTop: '0.5vw'
	  // }),
	  // noOptions: (provided) => ({
	  // 	...provided,
	  // 	fontSize: '1.6vw'
	  // })
	// };
	
	return (
		<div className='position-container'>
			<Warning errors={errors} />
			<div style={{marginBottom: '20px'}}>
				<div className='position-body'>
					<div className='position-left'>
						<div>
							<h2>{position.companyName}</h2>
							<h3>{position.discipline}</h3>
							<p>{`${position.city}, ${position.state}`}</p>
						</div>
						<div className='position-info'>
							<p>{position.description}</p>
							<p>{position.otherInformation}</p>
						</div>
					</div>
					<div className='position-right'>
						<div className='position-right-section'>
							<h4 className='supervising-engineer-label'>Supervising Engineer</h4>
							<h4 className='supervising-engineer'>{`${position.supervisorFname} ${position.supervisorLname}`}</h4>
						</div>
						<div className='position-right-section'>
							<h4 className='position-courses-label'>Onboarding Courses</h4>
							<ul>
								{ position.requestedSkills
									? position.requestedSkills.map((skill, index) => {
										return (
											<h4 className='position-course' key={index}>{skill}</h4>
										)
									})
									: null
								}
							</ul>
						</div>
					</div>
				</div>
				<h4 className='full-width'>Select field(s) to revise</h4> 
				<Select	
					value={selectedFields}
					onChange={updateSelectedFields}
					options={fields}
					isMulti={true}
					//styles={customStyles}
					// className='test'
				/>
				{ formData.length > 0
					? formData.map((section, index) => {
						return (
							<div key={section.label} className='application-input'>
								<h4>{section.label}</h4>
								<textarea value={section.message} onChange={(e) => handleUpdateFormData(e, index)}/>
							</div>
						)})
					: null
				}
			</div>
			<button className={formData.length === 0 ? 'disabled' : null}disabled={formData.length === 0} onClick={handleSubmit}>Submit</button>
		</div>
	)
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(RevisePositionVector);
