import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage'
import Footer from './Footer';
import Login from './Login'

function App() {
  const [loggedIn, handleLogin] = useState(false); 

  useEffect(isLoggedIn)

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
        handleLogin(true);
      }

    })
  }

  if (!loggedIn) {
  	return (
  		<React.Fragment>
  			<Login handleLogin={handleLogin}/>
		</React.Fragment>
  	)
  }
  return (
  	<React.Fragment>
  		<Navbar />
  		<Homepage />
  		<Footer />
	</React.Fragment>
  );
}

export default App;
