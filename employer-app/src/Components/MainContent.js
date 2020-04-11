import React, {useState} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideMenu from './SideMenu';
import UpgradeAdmin from './UpgradeAdmin';
import OpenPositions from './OpenPositions';
import HiringManagers from './HiringManagers';
import ChangePassword from './ChangePassword';
import '../css/app.css';	

function MainContent (props) {

	const [sidebarHidden, toggleHidden] = useState(false);
	
	console.log(props.user);

	return (
		<React.Fragment>
			<SideMenu hidden={sidebarHidden} toggleHidden={toggleHidden}/>
			 <div className='content-container'>
			 	{
			 		props.user.originalPassword
			 			? <ChangePassword />
			 			: null
			 	}
			    <Switch>
			      <Route exact path="/" component={OpenPositions} />
			      <Route path="/hiringmanagers" component={HiringManagers} />
			    </Switch>
			  </div>
			{
				//this is temporary code to upgrade a user to clearance level 2
				props.user.id === '5e8b9c08c171769fc3c3e00e'
					? <UpgradeAdmin />
					: null
			}		
		</React.Fragment>
	)
};

function mapStateToProps(state) {
  return {
  	user: state.user
  };
}

export default connect(mapStateToProps)(MainContent);