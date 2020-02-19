import React from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage'
import Footer from './Footer';
import Login from './Login'

function App() {
  const loggedIn = false;
  if (!loggedIn) {
  	return (
  		<React.Fragment>
  			<Login />
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
