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

  useEffect(isLoggedIn, [])

  function isLoggedIn() {
    fetch("http://apply.localhost:3001/authenticate", {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000" 
      },
      mode: "cors",
      credentials: "include"
    })
    .then(res => res.json())
    .then(resObject => {
      if (resObject.user) {
        //console.log({user: resObject.user})
      props.dispatch(getUser(resObject.user));
      props.dispatch(getApplication(resObject.user));
      toggleLogin(true);       
      }

    })
  }

  if (!loggedIn) {
  	return (
  		<React.Fragment>
  			<Login toggleLogin={toggleLogin}/>
		</React.Fragment>
  	)
  }
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
//if (state.application.applicationStatus) console.log (state.application.applicationStatus.application.apScores)
  //if (state.application.applicationStatus) console.log(state.application.applicationStatus.application.contactInformation);
  //console.log(state.application.applicationStatus.application.apScores);
  return state;
}

export default connect(mapStateToProps)(App);
