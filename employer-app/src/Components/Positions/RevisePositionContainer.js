import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import RevisePositionVector from './RevisePositionVector';
import RevisePositionCompany from './RevisePositionCompany';

function RevisePositionContainer({clearance, location}) {
	return (
		<React.Fragment>
			{
				clearance === 2
					? <RevisePositionVector position={location.state.position}/>
					: <RevisePositionCompany/>
			}
		</React.Fragment>
	)
}

function mapStateToProps(state) {
	return {
		clearance: state.user.user.clearance
	}
};

export default connect(mapStateToProps)(RevisePositionContainer);

