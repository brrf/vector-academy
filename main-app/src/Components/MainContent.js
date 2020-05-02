import React, {useState} from 'react';
import SideMenu from './SideMenu';
import ApplicationComponent from './student-application/ApplicationComponent';
import Courses from './Courses';
import { BrowserRouter as Route, Switch, useLocation} from "react-router-dom";
import '../css/app.css';	

export default function MainContent (props) {
	const [sidebarHidden, toggleHidden] = useState(false);

	return (
		<React.Fragment>
			<SideMenu hidden={sidebarHidden} toggleHidden={toggleHidden}/>
			<Switch>
			    <Route exact path='/' render={ (props) => <ApplicationComponent {...props} toggleSidebarHidden={toggleHidden}/> } />
			    <Route path='/courses' render={ (props) => <Courses {...props} toggleSidebarHidden={toggleHidden}/> } />
			</Switch>
		</React.Fragment>
	)
}