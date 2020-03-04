import React from 'react';
import '../css/sidemenu.css';

export default class Sidemenu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTab: 0
		}
		this.changeCurrentTab = this.changeCurrentTab.bind(this);
	}

	changeCurrentTab (index) {
		this.setState({
			currentTab: index
		})
	}

	render () {

		const featureContainers = ['Application', 'Interviews', 'Courses', 'Evaluations', 'Benefits', 'Career Prep']
		return (
			<div className='sidemenu-container'>
				{
					featureContainers.map( (container, index) => {
						return (
							<div key={container} className={`features-container ${index === 0 ? 'active' : 'temp-features-container'}`} onClick={() => this.changeCurrentTab(index)}>{container}</div>
						)
					})
				}
			</div>
		)
	}
}