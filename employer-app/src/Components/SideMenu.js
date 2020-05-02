import React, {useRef, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, useLocation} from "react-router-dom";
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import '../css/sidemenu.css';

function Sidemenu ({toggleHidden, hidden, clearance, positions}) {
	const [currentTab, updateCurrentTab] = useState(0);
	const [revisionNeeded, triggerRevision] = useState(false);
	function changeCurrentTab () {
		if (window.innerWidth <= 650) toggleHidden(true);
	};

	//toggle hidden if window is <650 on load
	useEffect(() => {
		if (window.innerWidth <= 650) {
			toggleHidden(true);
		}
	}, [])

	useEffect(() => {
		if (positions) {
			positions.forEach(position => {
				if (position.approved === 1) {
					triggerRevision(true);
					return;
				}
			})
		}
	}, [positions]);

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
			title: 'Pending Positions',
			link: 'pendingpositions'
		},
		{
			title: 'Open Positions',
			link: 'openpositions'
		},
		{
			title: 'Interviews',
			link: 'interviews'
		},
		{
			title: 'Ranked Candidates',
			link: 'rankedcandidates'
		},
		{
			title: 'Current Apprentices',
			link: 'currentapprentices'
		}
	];
	if (clearance === 1) {
		featureContainers.push({
			title: 'Hiring Managers',
			link: 'hiringmanagers'
		})
	}
	if (clearance === 2) {
		featureContainers.push({
			title: 'Add Admin',
			link: 'vectoradmin'
		})
	}
	
	const pathname = (useLocation().pathname.split('/'))[1];

	return (
		<React.Fragment>
			<ul className={`sidemenu-container ${hidden ? 'hidden' : ''}`}>				
					{
						featureContainers.map( (container, index) => {
							if (index === 0 || index === 1 || container.link === 'vectoradmin' || container.link === 'hiringmanagers') {
								return (
									<Link key={container.link} 
									className={`features-container ${container.link === pathname ? 'active' : null}`} 
									onClick={changeCurrentTab}
									to={`/${container.link}`}
									>
										{container.title}
										{ index === 0 && revisionNeeded && clearance !== 2
											? <FontAwesomeIcon
											icon={faExclamationCircle}
											className='exclamation'
											/>
											: null
										}
									</Link>
								)
							} else return (<div key={container.link} className='features-container temp-features-container'>{container.title}</div>)
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
  	positions: state.positions.positions,
  	clearance: state.user.user.clearance
  }
}

export default connect(mapStateToProps)(Sidemenu);



