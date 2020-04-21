import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import RevisePositionVector from './RevisePositionVector';
import RevisePositionCompany from './RevisePositionCompany';

function RevisePositionContainer({clearance, position}) {
	return (
		<React.Fragment>
			{
				clearance === 2
					? <RevisePositionVector position={position}/>
					: <RevisePositionCompany/>
			}
		</React.Fragment>
	)
}

function mapStateToProps(state, ownProps) {
	let currentPosition;
	if (state.positions.positions) {
		state.positions.positions.forEach(position => {
			if (position._id === ownProps.match.params.id) {
				currentPosition = position 
			}
		});
	};
	
	return {
		clearance: state.user.user.clearance,
		position: currentPosition
	}
};

RevisePositionContainer.defaultProps = {
	clearance: 0,
	position: {}
}

export default connect(mapStateToProps)(RevisePositionContainer);