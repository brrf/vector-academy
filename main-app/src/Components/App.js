import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import MainContent from './MainContent'
import {getApplication} from '../actions/application.js';
import {getUser} from '../actions/user.js';
import '../css/app.css';

function App(props) {
  const [loggedIn, toggleLogin] = useState(false); 
  const [loading, toggleLoading] = useState(true);

  //click anywhere in app will hide userOptions menu; pass these as props to navbar.
  const [userOptionsHidden, toggleUserOptions] = useState(true);
  useEffect(isLoggedIn, [])

  function isLoggedIn() {
    fetch(`${PROTOCOL}${DOMAIN}/authenticate`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include"
    })
    .then(res => res.json())
    .then(resObject => {
      if (resObject.user) {
        props.dispatch(getUser(resObject.user));
        props.dispatch(getApplication(resObject.user));
        toggleLogin(true);       
      }
      toggleLoading(false);
    })
  }

  if (loading) {
    return (
      <p style={{margin: '10px'}}>Loading...</p>
    )
  } else if (!loggedIn) {
  	return (
  		<React.Fragment>
  			<Login loginFunction={isLoggedIn} toggleLoading={toggleLoading}/>
		</React.Fragment>
  	)
  } else
  return (
  	<div onClick={() => toggleUserOptions(true)}>
  		<Navbar toggleLogin={toggleLogin} userOptionsHidden={userOptionsHidden} toggleUserOptions={toggleUserOptions}/>
      <div id='main-container'>
        <MainContent />
      </div>
  		<Footer />
	</div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
