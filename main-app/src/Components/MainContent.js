import React, {useState} from 'react';
import SideMenu from './SideMenu';
import ApplicationComponent from './student-application/ApplicationComponent';
import Courses from './Courses';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../css/app.css';	

export default function MainContent (props) {
	const [sidebarHidden, toggleHidden] = useState(false);

	return (
		<React.Fragment>
			<SideMenu hidden={sidebarHidden} toggleHidden={toggleHidden}/>
			<div className='content-container'>
				<Switch>
				    <Route exact path='/' render={ (props) => <ApplicationComponent {...props} toggleSidebarHidden={toggleHidden}/> } />
				    <Route path='/courses' render={ (props) => <Courses {...props} toggleSidebarHidden={toggleHidden}/> } />
				</Switch>
			</div>
		</React.Fragment>
	)
}