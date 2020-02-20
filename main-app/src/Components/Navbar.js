import React from 'react';
import logo from '../images/Vector-01.png';
import '../css/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends React.Component {
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
	

	render () {
		return (
			<div id='navbar-container'>
				<img alt='logo' src={logo} />
				<div className='navbar-right'>
					<button>Start Application</button>
	             	<div className='navbar-user-container' onClick={this.toggleUserOptions}>
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