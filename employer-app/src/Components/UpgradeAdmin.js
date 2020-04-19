import React, {useState} from 'react';
import {connect} from 'react-redux';
import SideMenu from './SideMenu';
import '../css/app.css';	


//this is temporary code which should only be used to create a vector admin once
function UpgradeAdmin (props) {

	function upgradeAdmin () {
		fetch(`${PROTOCOL}${DOMAIN}/upgradeadmin`, {
	      method: "GET",
	      headers: { 
	        "Content-Type": "application/json",
	      },
	      mode: "cors",
	      credentials: "include"
	    })
	    .then(res => res.json())
	    .then(resObject => {
			if (resObject.errors) {
	        	console.log('An error occurred');
	    	} else {
		    	console.log('It should have worked.');
		    }
	    });
	}
	return (
		props.user.clearance === 2
			? null
			: <button onClick={upgradeAdmin}>Upgrade to Level 2 clearance</button>
	)
};

function mapStateToProps(state) {
  return {
  	user: state.user.user
  };
}

export default connect(mapStateToProps)(UpgradeAdmin);