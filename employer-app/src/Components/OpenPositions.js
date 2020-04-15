import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Home from './Home';
import Admin from './Admin';
import '../css/app.css';
import {updateUser} from '../actions/user';

function OpenPositions(props) {
	return (
		//<button onClick={() => props.dispatch(updateUser('originalPassword', true))}>toggle</button>
		<p>More to come</p>
	)
}

function mapStateToProps(state) {
  return {
  	user: state.user
  };
}

export default connect(mapStateToProps)(OpenPositions);