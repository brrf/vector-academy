import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';

export default function RevisePositionCompany(props) {
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
	
	return (
		<p>Coming soon</p>
	)
};
