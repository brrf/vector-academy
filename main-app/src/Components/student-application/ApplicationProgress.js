import React, {useRef, useEffect, useState} from 'react';
import {connect} from "react-redux";

function ApplicationProgress (props) {
	const {completedSteps} = props
	const [progressPercentage, setProgressPercentage] = useState(0);
	useEffect(incrementProgressPercentage, [completedSteps]);

	const barWidth = useRef(null);
	let innerBarWidth = barWidth.current ? progressPercentage * barWidth.current.offsetWidth / 100 : 0;

	function incrementProgressPercentage () {	
		setProgressPercentage(Math.floor(0 + 12.5 * completedSteps));
	}

	return (
		<div className='application-progress-container'>
			<h3>Application Progress</h3>
			<div ref={barWidth} id="bar">
			  <p className='progress-percentage'>{progressPercentage}%</p>
			  <div style={{width: innerBarWidth}}></div>
			</div>
		</div>	
	)
}

function mapStateToProps(state) {
	const completedSteps = Object.keys(state.application.applicationStatus.application).length;
	return {
		completedSteps
	}
};

export default connect(mapStateToProps)(ApplicationProgress);

