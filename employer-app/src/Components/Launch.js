import React, {useState} from 'react';
import {connect} from 'react-redux';
import '../css/app.css';	

//this is temporary code which should only be used to create a vector admin once
export default function Launch (props) {

	function launchAdmin () {
		fetch(`${PROTOCOL}${DOMAIN}/launchadmin`, {
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
	return <button onClick={launchAdmin}>Launch</button>
};