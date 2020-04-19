import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import MainContent from './MainContent';
import Launch from './Launch';
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
        toggleLogin(true);       
      }
      toggleLoading(false);
    })
  };

  if (loading) {
    return (
      <p style={{margin: '10px'}}>Loading...</p>
    )
  } else if (!loggedIn) {
  	return (
  		<Router>
        <Route path='/launch' component={Launch} />
        <Route path='/' render={(props) => <Login loginFunction={isLoggedIn} toggleLoading={toggleLoading}/>} />
		</Router>
  	)
  } else
  return (
  	<Router>
      <Navbar toggleLogin={toggleLogin} toggleUserOptions={toggleUserOptions} userOptionsHidden={userOptionsHidden}/>
      <div id='main-container'>
        <MainContent />
      </div>
      <Footer />
    </Router>  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
