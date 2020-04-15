import React, {useRef, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, useLocation} from "react-router-dom";
import {connect} from 'react-redux';
import '../css/sidemenu.css';

function Sidemenu ({toggleHidden, hidden, clearance, location, match, history}) {
	const [currentTab, updateCurrentTab] = useState(0);

	function changeCurrentTab () {
		if (window.innerWidth <= 650) toggleHidden(true);
	};
	
	//toggle hidden if window is <650 on load
	useEffect(() => {
		if (window.innerWidth <= 650) {
			toggleHidden(true);
		}
	}, [])

	//toggle hidden if window gets resized
	window.addEventListener('resize', handleResize)
	function handleResize() {
		if (window.innerWidth > 650 && hidden === true) {
			toggleHidden(false);
		};
		if (window.innerWidth <= 650 && hidden === false) {
			toggleHidden(true);
		};
	};
	const featureContainers = [
		{
			title: 'Open Positions',
			link: '/'
		},
		{
			title: 'Interviews',
			link: '/interviews'
		},
		{
			title: 'Ranked Candidates',
			link: '/rankedcandidates'
		},
		{
			title: 'Current Apprentices',
			link: '/currentapprentices'
		}
	];
	if (clearance === 1) {
		featureContainers.push({
			title: 'Hiring Managers',
			link: '/hiringmanagers'
		})
	}
	if (clearance === 2) {
		featureContainers.push({
			title: 'Add Admin',
			link: '/vectoradmin'
		})
	}
	const {pathname} = useLocation();
	return (
		<React.Fragment>
			<ul className={`sidemenu-container ${hidden ? 'hidden' : ''}`}>				
					{
						featureContainers.map( container => {
							return (
								<Link key={container.link} 
									className={`features-container ${container.link === pathname ? 'active' : null}`} 
									onClick={changeCurrentTab}
									to={container.link}
								>
									{container.title}
								</Link>
							)
						})
					}			
			</ul>
			<div className={`sidemenu-toggle-container ${hidden ? '' : 'hidden'}`} onClick={() => toggleHidden(false)}>
				<h3 className='sidemenu-toggle'>Menu</h3>
			</div>
		</React.Fragment>
	)
}

function mapStateToProps(state) {
  return {
  	clearance: state.user.clearance
  }
}

export default connect(mapStateToProps)(Sidemenu);



