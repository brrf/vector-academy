import React, {useState} from 'react';
import {CardNumberElement, CardExpiryElement, CardCvcElement, useElements} from '@stripe/react-stripe-js';
import '../../css/stripe.css';
import '../../css/forms.css';

export default function CardSection ({data, updateData}) {
	const [inputState, updateInputState] = useState([
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		},
		{
			focus: false,
			empty: true
		}
	]);
	
	function handleFocus(index) {
		let newState = [...inputState];
		newState[index] = {
			...newState[index],
			focus: true
		}
		updateInputState(newState);
	};

	function handleBlur(index) {
		let newState = [...inputState];
		newState[index] = {
			...newState[index],
			focus: false
		}
		updateInputState(newState);
	};

	function handleKeyUp(e, index) {
		let newState = [...inputState];
		if(e.target.value.length === 0) {
			newState[index] = {
				...newState[index],
				empty: true
			}
		} else {
			newState[index] = {
				...newState[index],
				empty: false
			}
		}
		updateInputState(newState);
	};

	const CARD_ELEMENT_OPTIONS = {
	  style: {
    	base: {
    		fontSize: '16px',
    		fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
      		"::placeholder": {
				color: 'transparent'
			},
			":focus": {
				"::placeholder": {
					color: '#cfd7df'
				}
			},
      	},
      },
	  classes: {
	  	base: 'styled-input',
	  	focus: 'styled-input-focus',
   		empty: 'styled-input-empty',
    	invalid: 'styled-input-invalid',
	  }
	};

	function handleUpdateData(e, field) {
		updateData({
			...data,
			[field]: e.target.value
		})
	}

	return (
		<React.Fragment>
			<div className='styled-row'>
				<div className='styled-field' 
					onFocus={() => handleFocus(0)}
					onBlur={() => handleBlur(0)}
					onKeyUp={(e) => handleKeyUp(e, 0)}
				>
					<input className={`styled-input ${inputState[0].focus ? 'styled-input-focus' : ''} ${inputState[0].empty ? 'styled-input-empty' : ''}`}
						placeholder='450 Promenade Place' 
						autoComplete='street-address'
						type='text'
						value={data.street}
						onChange={(e) => handleUpdateData(e, 'street')}
						required
					/>
					<label className='styled-label'>Address</label>
					<div className='baseline'></div>
				</div>
			</div>
			<div className='styled-row'>
				<div className='styled-field half-width' 
					onFocus={() => handleFocus(1)}
					onBlur={() => handleBlur(1)}
					onKeyUp={(e) => handleKeyUp(e, 1)}
				>
					<input className={`styled-input ${inputState[1].focus ? 'styled-input-focus' : ''} ${inputState[1].empty ? 'styled-input-empty' : ''}`}
						placeholder='Chicago' 
						autoComplete='address-level2'
						type='text'
						value={data.city}
						onChange={(e) => handleUpdateData(e, 'city')}
						required
					/>
					<label className='styled-label'>City</label>
					<div className='baseline'></div>
				</div>	
				<div className='styled-field quarter-width' 
					onFocus={() => handleFocus(2)}
					onBlur={() => handleBlur(2)}
					onKeyUp={(e) => handleKeyUp(e, 2)}
				>
					<input className={`styled-input ${inputState[2].focus ? 'styled-input-focus' : ''} ${inputState[2].empty ? 'styled-input-empty' : ''}`}
						placeholder='IL' 
						autoComplete='address-level1'
						type='text'
						value={data.state}
						onChange={(e) => handleUpdateData(e, 'state')}
						required
					/>
					<label className='styled-label'>State</label>
					<div className='baseline'></div>
				</div>			
				<div className='styled-field quarter-width' 
					onFocus={() => handleFocus(3)}
					onBlur={() => handleBlur(3)}
					onKeyUp={(e) => handleKeyUp(e, 3)}
				>
					<input className={`styled-input ${inputState[3].focus ? 'styled-input-focus' : ''} ${inputState[3].empty ? 'styled-input-empty' : ''}`}
						placeholder='60611' 
						autoComplete='postal-code'
						type='text'
						value={data.zip}
						onChange={(e) => handleUpdateData(e, 'zip')}
						required
					/>
					<label className='styled-label'>ZIP</label>
					<div className='baseline'></div>
				</div>
			</div>
			<div className='styled-row'>
				<div className='styled-field'>
					<CardNumberElement options={CARD_ELEMENT_OPTIONS} />
					<label className='styled-label'>Card Number</label>
					<div className='baseline'></div>
				</div>
			</div>
			<div className='styled-row'>
				<div className='styled-field half-width'>
					<CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
					<label className='styled-label'>Expiration</label>
					<div className='baseline'></div>
				</div>
				<div className='styled-field half-width'>
					<CardCvcElement options={CARD_ELEMENT_OPTIONS} />
					<label className='styled-label'>CVC</label>
					<div className='baseline'></div>
				</div>
			</div>
	    </React.Fragment>
	);
}