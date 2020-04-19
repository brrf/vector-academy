import React, {useState, useEffect}  from 'react';
import { connect } from "react-redux";
import logo from '../images/Vector-01.png';
import '../css/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {setPositions} from '../actions/positions';
import getPositions from '../../utils/getPositions';

function Navbar (props) {
	const [firstIncomplete, setFirstIncomplete] = useState(null);
	const [navbarText, setNavbarText] = useState('')
	function logout () {
		fetch(`${PROTOCOL}${DOMAIN}/employerlogout`, {
			method: "GET",
			headers: { 
			"Content-Type": "application/json",
			},
			mode: "cors",
			credentials: "include"
			})
		.then(res => res.json())
		.then(resObject => {
			if (resObject.error) {
				alert('An error occurred on logout');
			} else {
				props.toggleLogin(false);
			}
		})
	}

	function handleToggleUserOptions(e) {
		props.toggleUserOptions(!props.userOptionsHidden);
		e.stopPropagation();
	}

	useEffect(() => {
		let text;
		props.user.clearance === 2
			? text = 'Add admin'
			: text = 'Hire Apprentice'
		setNavbarText(text);
	}, [])

	useEffect(() => {
		getPositions()
		.then(positions => props.dispatch(setPositions(positions)));
	}, [])


	return (
		<div id='navbar-container'>
			<img alt='logo' src={logo} className='logo' />
			<div className='navbar-right'>
				<button>{navbarText}</button>
             	<div className='navbar-user-container' onClick={handleToggleUserOptions}>
             		<FontAwesomeIcon
		                icon={faUserCircle}
		                className='navbar-user'
          			/>
             		<div onClick={logout} className={`navbar-user-options ${props.userOptionsHidden ? 'hidden' : null}`}>Logout</div>
             	</div>
             </div>
		</div>
	)
}

function mapStateToProps(state) {
	return {		
		user: state.user.user
	}
}

export default connect(mapStateToProps)(Navbar);

