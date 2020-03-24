import React, {useRef, useState, useEffect} from 'react';
import '../css/sidemenu.css';

export default function Sidemenu ({toggleHidden, hidden}) {
	const [currentTab, updateCurrentTab] = useState(0);

	function changeCurrentTab (index) {
		updateCurrentTab(index);
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

	const featureContainers = ['Application', 'Interviews', 'Courses', 'Evaluations', 'Benefits', 'Career Prep']
	return (
		<React.Fragment>
			<div className={`sidemenu-container ${hidden ? 'hidden' : ''}`}>
				{
					featureContainers.map( (container, index) => {
						return (
							<div key={container} className={`features-container ${index === 0 ? 'active' : 'temp-features-container'}`} onClick={() => changeCurrentTab(index)}>{container}</div>
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