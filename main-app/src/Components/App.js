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
  useEffect(isLoggedIn, [])

  function isLoggedIn() {
    fetch(`${PROTOCOL}apply.${DOMAIN}/authenticate`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
     //   "Access-Control-Allow-Origin": "http://localhost:3000" 
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
  	<React.Fragment>
  		<Navbar toggleLogin={toggleLogin}/>
      <div id='main-container'>
        <MainContent />
      </div>
  		<Footer />
	</React.Fragment>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
