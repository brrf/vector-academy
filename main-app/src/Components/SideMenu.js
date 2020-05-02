import React, {useRef, useState, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom';

import '../css/sidemenu.css';

export default function Sidemenu ({toggleHidden, hidden}) {
	function changeCurrentTab (index) {
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
			title: 'Application',
			link: ''
		},
		{
			title: 'Interviews',
			link: 'interviews'
		},
		{
			title: 'Courses',
			link: 'courses'
		},
		{
			title: 'Evaluations',
			link: 'evaluations'
		},
		{
			title: 'Benefits',
			link: 'benefits'
		},
		{
			title: 'Career Prep',
			link: 'career'
		}
	];

	const pathname = (useLocation().pathname.split('/'))[1];

	return (
		<React.Fragment>
			<div className={`sidemenu-container ${hidden ? 'hidden' : ''}`}>
				{
					featureContainers.map( (container, index) => {
						return (
							<Link key={container.link} 
								className={`features-container ${container.link === pathname ? 'active' : null}`} 
								onClick={changeCurrentTab}
								to={`/${container.link}`}
							>
								{container.title}
							</Link>
						)
					})
				}
			</div>
			<div className={`sidemenu-toggle-container ${hidden ? '' : 'hidden'}`} onClick={() => toggleHidden(false)}>
				<h3 className='sidemenu-toggle'>Menu</h3>
			</div>
		</React.Fragment>
	)
}