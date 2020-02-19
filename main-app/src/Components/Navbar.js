import React from 'react';
import logo from '../images/Vector-01.png';
import '../css/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: ''
		}
	}
	// componentDidMount() {
	//     fetch("http://apply.localhost:3001/user", {
	//       method: "GET"
	//     })
	//       .then(res => res.json())
	//       .then(resObject => {
	//         console.log(resObject.user);
	//       })
 //  	}

	render () {
		return (
			<div id='navbar-container'>
				<img alt='logo' src={logo} />
				<div className='navbar-right'>
					<button>Start Application</button>
	             	<FontAwesomeIcon
		                icon={faUserCircle}
		                size="2x"
		                className='navbar-user'
	             	/>
	             </div>
			</div>
		)
	}
}