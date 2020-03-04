import React from 'react';
import '../css/homepage.css';

export default class HomePage extends React.Component {
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
				<div className='features-container features-container-1'></div>
				<div className='features-container features-container-2'></div>
				<div className='features-container features-container-3'></div>
				<div className='features-container features-container-4'></div>
			</div>
		)
	}
}