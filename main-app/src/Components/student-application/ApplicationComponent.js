import React, {useRef} from 'react';
import '../../css/forms.css';
import '../../css/application-component.css';
import ApplicationSteps from './ApplicationSteps';

export default function ApplicationComponent ({toggleSidebarHidden}) {

	function handleSidebar () {
		if (window.innerWidth > 650) return;
		toggleSidebarHidden(true)
	}
	

	return (
		<div onClick={handleSidebar}>
			<ApplicationSteps />		
		</div>
	);
};