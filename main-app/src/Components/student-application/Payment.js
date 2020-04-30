import React, {useEffect, useState} from 'react';
import {Elements, useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
//import '../../css/stripe.css';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripe = loadStripe("pk_test_BzbUPhc2qwlEzfVyTPOTeF7L00UIPNkW1f");

export default function Payment ({handleApplicationStep}) {
	const [stripeToken, setStripeToken] = useState(null);

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, []);

	useEffect(() => {
		fetch(`${PROTOCOL}${DOMAIN}/stripetoken`, {
	      method: "GET",
	      headers: { 
	        "Content-Type": "application/json",
	       // "Access-Control-Allow-Origin": "http://localhost:3000" 
	      },
	      mode: "cors",
	      credentials: "include"
	    })
	    .then(res => res.json())
	    .then(resObject => {
	    	setStripeToken(resObject.secret);
	    })
	}, []);

	return (
		<Elements stripe={stripe}>
	    	<CheckoutForm token={stripeToken} handleApplicationStep={handleApplicationStep}/>
		</Elements>
	)
}