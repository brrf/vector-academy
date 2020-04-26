import React, {useRef, useEffect, useState} from 'react';
import {connect} from "react-redux";

function ApplicationProgress (props) {
	const {completedSteps} = props
	const [progressPercentage, setProgressPercentage] = useState(0);
	const [innerBarWidth, updateInnerBarWidth] = useState(0);
	useEffect(incrementProgressPercentage, [completedSteps]);

	const barWidth = useRef(null);
	useEffect(() => {
		updateInnerBarWidth((progressPercentage * barWidth.current.offsetWidth / 100) - 8 );
	}, [progressPercentage])
	
	//resize progress bar width as window width changes
	window.onresize = function () {
		if (barWidth.current) {
			updateInnerBarWidth((progressPercentage * barWidth.current.offsetWidth / 100) - 8 );
		};
	};

	function incrementProgressPercentage () {	
		setProgressPercentage(Math.floor(0 + 100/7 * completedSteps));
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

