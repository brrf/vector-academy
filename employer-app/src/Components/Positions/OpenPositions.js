import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle, faCheckCircle, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import '../../css/position.css';
import PositionViewer from './PositionViewer';

function OpenPositions({positions}) {

	const [errors, updateErrors] = useState(null);
	useEffect(() => {
		if (positions) {
			let newErrors = positions.map((position) => {
				return ([]);
			})
			updateErrors(newErrors);
		}
	}, [positions]);
	return (
		<React.Fragment>
			<PositionViewer positions={positions} />
		</React.Fragment>
	)
}

function mapStateToProps(state) {
	let openPositions;
	if (state.positions.positions) {
		openPositions = state.positions.positions.filter(position => position.approved === 2);
	}
  return {
  	positions: openPositions
  };
}

export default connect(mapStateToProps)(OpenPositions);