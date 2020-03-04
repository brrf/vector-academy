import React from 'react';
import SideMenu from './SideMenu';
import ApplicationComponent from './student-application/ApplicationComponent';

export default function MainContent () {

	return (
		<React.Fragment>
			<SideMenu />
			<ApplicationComponent />
		</React.Fragment>
	)
}