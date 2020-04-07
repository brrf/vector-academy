import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Components/App';	
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/user";

const store = createStore(reducer);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));