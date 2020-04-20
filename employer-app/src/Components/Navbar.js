import React, {useState, useEffect}  from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import logo from '../images/Vector-01.png';
import '../css/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {setPositions} from '../actions/positions';
import getPositions from '../../utils/getPositions';

function Navbar (props) {
	const [firstIncomplete, setFirstIncomplete] = useState(null);
	const [navbarButton, setNavbarButton] = useState({
		text: '',
		url: ''
	});

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
		let navbarObject;
		props.user.clearance === 2
			? navbarObject = {
				text: 'Add admin',
				url: '/vectoradmin'
			}
			: navbarObject = {
				text: 'Hire Apprentice',
				url: '/'
			}
		setNavbarButton(navbarObject);
	}, [])

	useEffect(() => {
		getPositions()
		.then(positions => props.dispatch(setPositions(positions)));
	}, []);

	return (
		<div id='navbar-container' onClick={() => props.toggleUserOptions(true)}>
			<img alt='logo' src={logo} className='logo' />
			<div className='navbar-right'>
				<Link to={navbarButton.url}><button>{navbarButton.text}</button></Link>
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

