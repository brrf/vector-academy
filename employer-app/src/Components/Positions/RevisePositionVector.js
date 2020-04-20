import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';

export default function RevisePositionVector({position}) {
	console.log(position)
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
				console.log(field);
				dataObject.push({
					field: field.value,
					message: ''
				})
			})
		};
	}, [selectedFields]);

	function handleUpdateFormData () {
		console.log('y')
	}
	
	return (
		<div className='position-container'>
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
							{
								position.requestedSkills.map((skill, index) => {
									return (
										<h4 className='position-course' key={index}>{skill}</h4>
									)
								})
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
			{
				selectedFields
					? selectedFields.map(field => {
					return <textarea />
					})
					: null
			}
		</div>
	)
};
