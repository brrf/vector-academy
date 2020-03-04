import React from 'react';
import { connect } from "react-redux";
import logo from '../images/Vector-01.png';
import '../css/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {setApplicationStep} from '../actions/application.js';

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userOptionsHidden: true
		}

		this.toggleUserOptions = this.toggleUserOptions.bind(this);
		this.logout = this.logout.bind(this);
	}

	toggleUserOptions () {
		this.setState({
			userOptionsHidden: !this.state.userOptionsHidden
		})
	}

	logout () {
		fetch("http://apply.localhost:3001/studentlogout", {
			method: "GET",
			headers: { 
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "http://localhost:3000" 
			},
			mode: "cors",
			credentials: "include"
			})
		.then(res => res.json())
		.then(resObject => {
			if (resObject.error) {
				alert('An error occurred on logout');
			} else {
				this.props.toggleLogin(false);
			}
		})
	}

	handleHomeButton (step) {
		this.props.dispatch(setApplicationStep(step));
	}
	

	render () {
		const {applicationStep, completedSteps} = this.props.applicationStatus;
		let button = {
			text: 'Start Application',
			applicationStep: false
		};
		if (completedSteps === 0 && applicationStep === false) {
			button.text = 'Start Application'
			button.applicationStep = 0; 
		} else if (completedSteps !== 0 && applicationStep === false) {
			button.text = 'Continue Application';
			button.applicationStep = 0;
		} else {
			button.text = 'Application Home';
			button.applicationStep = false;
		}

		return (
			<div id='navbar-container'>
				<img alt='logo' src={logo} className='logo' />
				<div className='navbar-right'>
					<button onClick={() => this.handleHomeButton(button.applicationStep)}>{button.text}</button>
	             	<div className='navbar-user-container' onClick={this.toggleUserOptions} tabIndex="1" onBlur={this.toggleUserOptions}>
	             		<FontAwesomeIcon
		                icon={faUserCircle}
		                size="2x"
		                className='navbar-user'
	          			/>
	             		<div onClick={this.logout} className={`navbar-user-options ${this.state.userOptionsHidden ? 'hidden' : null}`}>Logout</div>
	             	</div>
	             </div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		applicationStatus: {
			applicationStep: state.application.applicationStatus.applicationStep,
			completedSteps: Object.keys(state.application.applicationStatus.application).length
		}
	}
}

export default connect(mapStateToProps)(Navbar);

