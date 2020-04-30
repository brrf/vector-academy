import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PositionsViewer from './PositionsViewer';
import {ApplicationSubmitButtons, ApplicationEditButtons} from './ApplicationButtons';

export default function CompanySelection ({handleApplicationStep, handleSubmit}) {
	const [errors, handleErrors] = useState([]);
	const [positionList, updatePositionList] = useState([]);
	
	useEffect(getAvailablePositions, [])
	function getAvailablePositions() {

		fetch(`${PROTOCOL}${EMPLOYERDOMAIN}/getpositions`, {
	      method: "GET",
	    })
	    .then(res => res.json())
	    .then(resObject => {
	    	if (resObject.errors) {
	    		handleErrors(resObject.errors)
	    	} else {
	    		updatePositionList(resObject.positionList);
	    	}
	    });
	};

	return (
		<div className='application-input'>
			<PositionsViewer handleApplicationStep={handleApplicationStep} handleSubmit={handleSubmit} positions={positionList}/>
		</div>
	)
};