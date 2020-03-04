import React from 'react';
import '../../css/forms.css';
import '../../css/application-component.css';

import ApplicationProgress from './ApplicationProgress';
import ApplicationSteps from './ApplicationSteps';

export default function ApplicationComponent (props) {
	return (
		<div className='application-container'>
			<ApplicationProgress />
			<ApplicationSteps />		
		</div>
	);
};