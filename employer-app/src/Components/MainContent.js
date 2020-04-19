import React, {useState} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideMenu from './SideMenu';
import UpgradeAdmin from './UpgradeAdmin';
import OpenPositions from './OpenPositions';
import NewPosition from './NewPosition';
import HiringManagers from './HiringManagers';
import VectorAdmin from './VectorAdmin';
import ChangePassword from './ChangePassword';
import '../css/app.css';	

function MainContent (props) {
	const [sidebarHidden, toggleHidden] = useState(false);

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
			      <Route path="/newposition" component={NewPosition} />
			      <Route path="/hiringmanagers" component={HiringManagers} />
			      <Route path="/vectoradmin" component={VectorAdmin} />
			    </Switch>
			  </div>		
		</React.Fragment>
	)
};

function mapStateToProps(state) {
	
  return {
  	user: state.user.user
  };
}

export default connect(mapStateToProps)(MainContent);