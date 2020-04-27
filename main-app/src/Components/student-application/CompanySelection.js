import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PositionsViewer from './PositionsViewer';
import {ApplicationSubmitButtons, ApplicationEditButtons} from './ApplicationButtons';

function CompanySelection ({handleApplicationStep, handleSubmit, complete, data}) {
	const [errors, handleErrors] = useState([]);
	const [positionList, updatePositionList] = useState([]);
	
	useEffect(getAvailablePositions, [])
	function getAvailablePositions() {

		fetch(`${PROTOCOL}${EMPLOYERDOMAIN}/getpositions`, {
	      method: "GET",
	      headers: { 
	        "Content-Type": "application/json",
	      },
	      mode: "cors",
	      credentials: "include"
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

	console.log(props.complete)

	return (
		<div className='application-input'>
			<PositionsViewer handleApplicationStep={handleApplicationStep} handleSubmit={handleSubmit} positions={positionList}/>
		</div>
	)
};

function mapStateToProps(state) {
	const complete = state.application.applicationStatus.application.positions ? true : false
	return {
		complete,
		data: state.application.applicationStatus.application.cv,
	}
};

export default connect(mapStateToProps)(CompanySelection);
