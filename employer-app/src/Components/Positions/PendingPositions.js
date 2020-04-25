import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faTimesCircle, faCheckCircle, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import '../../css/position.css';
import PositionViewer from './PositionViewer';

function PendingPositions({revisionsRequested, unreviewedPositions}) {

	return (
		<React.Fragment>
			{
				revisionsRequested && revisionsRequested.length > 0
					? <React.Fragment>
						<h2>Requiring Revision</h2>
						<PositionViewer positions={revisionsRequested} />
					</React.Fragment>
					: null
			}
			{
				unreviewedPositions && unreviewedPositions.length > 0
					? <React.Fragment>
						<h2>Pending Review</h2>
						<PositionViewer positions={unreviewedPositions} />
					</React.Fragment>
					: null
			}
			{
				unreviewedPositions && revisionsRequested && revisionsRequested.length === 0 && unreviewedPositions.length === 0
				 ? <p>No pending positions</p>
				 : null
			}
		</React.Fragment>
	)
}

function mapStateToProps(state) {
	let revisionsRequested = []; 
	let unreviewedPositions = [];

	if (state.positions.positions) {
		state.positions.positions.forEach(position => {
			if (position.approved === 1) {
				revisionsRequested.push(position);
			} else if (position.approved === 0) {
				unreviewedPositions.push(position)
			};
		});
	}
	return {
		revisionsRequested,
		unreviewedPositions
	};
};

export default connect(mapStateToProps)(PendingPositions);

