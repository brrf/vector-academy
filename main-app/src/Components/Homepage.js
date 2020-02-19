import React from 'react';
import '../css/homepage.css';

export default class Homepage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: ''
		}
	}
	render () {
		return (
			<div className='homepage-container'>
				<div className='application-status-container'></div>
				<div className='container-1'></div>
				<div className='container-2'></div>
				<div className='container-3'></div>
				<div className='container-4'></div>
			</div>
		)
	}
}