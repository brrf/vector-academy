import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import '../../css/position.css';

export default function RevisePositionVector({position}) {
	const [formData, updateFormData] = useState([]);
	const [selectedFields, updateSelectedFields] = useState(null);
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

		console.log('clicked');
	}
	
	return (
		<div className='position-container'>
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
