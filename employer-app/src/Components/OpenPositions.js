import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import Admin from './Admin';
import '../css/position.css';
import {updateUser} from '../actions/user';

function OpenPositions(props) {
	return (
		<div>
		<h2>Positions To Review</h2>
		{
			props.positions
				? props.positions.map((position, index) => {
					return (<p key={index} className='position-container'>{position.discipline}</p>)
				})
				: null
		}
		</div>
	)
}

function mapStateToProps(state) {
	console.log({state});
  return {
  	positions: state.positions.positions
  };
}

export default connect(mapStateToProps)(OpenPositions);