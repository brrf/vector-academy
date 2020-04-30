import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Elements, useStripe, useElements, CardNumberElement} from '@stripe/react-stripe-js';
import {updateUserStatus} from '../../actions/user';
import CardSection from './CardSection';
import Warning from '../Warning';
import '../../css/stripe.css';

function CheckoutForm (props) {
	const stripe = useStripe();
	const elements = useElements();

	const [errors, handleErrors] = useState(['Application submission will open on September 1st, 2020']);
	const [paymentStatus, updatePaymentStatus] = useState(false);
	const [data, updateData] = useState({
		street: '',
		city: '',
		state: '',
		zip: ''
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
		  // Stripe.js has not yet loaded.
		  // Make sure to disable form submission until Stripe.js has loaded.
		  return;
		}

		const result = await stripe.confirmCardPayment(props.token, {
		  payment_method: {
		    card: elements.getElement(CardNumberElement),
		    billing_details: {
		      name: 'Jenny Rosen',
		    },
		  }
		});
		if (result.error) {
			handleErrors([result.error.message]);
		} else {
		  // The payment has been processed!
		  	if (result.paymentIntent.status === 'succeeded') {
				fetch(`${PROTOCOL}${DOMAIN}/application`, {
				  method: "POST",
				  body: JSON.stringify({data, applicationStep: 7}),
				  headers: { 
				    "Content-Type": "application/json",
				  //  "Access-Control-Allow-Origin": "http://localhost:3000" 
				  },
				  mode: "cors",
				  credentials: "include"
				})
				.then(res => res.json())
				.then(resObject => {
					if (resObject.errors) {
						handleErrors(resObject.errors)
					} else {
						props.dispatch(updateUserStatus(1));
						props.handleApplicationStep(false);
					}
				})
			};
		}
	};

	return (
		<React.Fragment>
				<h2 className='center'>Finalize Payment</h2>				
				<form className='stripe-form application-form-container' onSubmit={handleSubmit}>
					<Warning errors={errors} />	
					<CardSection data={data} updateData={updateData}/>
					<button disabled={!stripe || true}>Confirm $35 Payment</button>
				</form>
		</React.Fragment>
	)
}

function mapStateToProps(state) {
	return {state}
};

export default connect(mapStateToProps)(CheckoutForm);

