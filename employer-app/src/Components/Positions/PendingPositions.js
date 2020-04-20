import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faTimesCircle, faCheckCircle, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import '../../css/position.css';
import PositionViewer from './PositionViewer';

function PendingPositions({positions}) {
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
			<PositionViewer pending={true} positions={positions} />
		</React.Fragment>
	)
}

function mapStateToProps(state) {
	let pendingPositions;
	if (state.positions.positions) {
		pendingPositions = state.positions.positions.filter(position => position.approved === 0 || position.approved === 1);
	}
	return {
		positions: pendingPositions,
	};
};

export default connect(mapStateToProps)(PendingPositions);

