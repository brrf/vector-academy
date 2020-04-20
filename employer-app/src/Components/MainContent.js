import React, {useState} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideMenu from './SideMenu';
import UpgradeAdmin from './UpgradeAdmin';
import OpenPositions from './Positions/OpenPositions';
import NewPosition from './Positions/NewPosition';
import PendingPositions from './Positions/PendingPositions';
import RevisePositionContainer from './Positions/RevisePositionContainer';
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
			      <Route exact path="/" component={NewPosition} />
			      <Route exact path="/pendingpositions" component={PendingPositions} />
			      <Route path="/pendingpositions/:id" component={RevisePositionContainer} />
			      <Route path="/openpositions" component={OpenPositions} />
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