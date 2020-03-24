import React, {useState} from 'react';
import SideMenu from './SideMenu';
import ApplicationComponent from './student-application/ApplicationComponent';
import '../css/app.css';	

export default function MainContent () {

	const [sidebarHidden, toggleHidden] = useState(false);

	return (
		<React.Fragment>
			<SideMenu hidden={sidebarHidden} toggleHidden={toggleHidden}/>
			<ApplicationComponent toggleSidebarHidden={toggleHidden}/>
		</React.Fragment>
	)
}