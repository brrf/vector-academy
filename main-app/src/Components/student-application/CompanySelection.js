import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PositionsViewer from './PositionsViewer';
import {ApplicationSubmitButtons, ApplicationEditButtons} from './ApplicationButtons';

function CompanySelection (props) {
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

	return (
		<div className='application-input'>
			<PositionsViewer positions={positionList}/>
		</div>
	)
};

function mapStateToProps(state) {
	return state
};

export default connect(mapStateToProps)(CompanySelection);
