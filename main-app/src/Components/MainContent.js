import React, {useState} from 'react';
import SideMenu from './SideMenu';
import ApplicationSteps from './student-application/ApplicationSteps';
import Courses from './Courses';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../css/app.css';	

export default function MainContent (props) {
	const [sidebarHidden, toggleHidden] = useState(false);

	function handleSidebar () {
		if (window.innerWidth > 650) return;
		toggleHidden(true)
	}

	return (
		<React.Fragment>
			<SideMenu hidden={sidebarHidden} toggleHidden={toggleHidden}/>
			<div className='content-container' onClick={handleSidebar}>
				<Switch>
				    <Route exact path='/' render={ (props) => <ApplicationSteps {...props} /> } />
				    <Route path='/courses' render={ (props) => <Courses {...props} /> } />
				</Switch>
			</div>
		</React.Fragment>
	)
}