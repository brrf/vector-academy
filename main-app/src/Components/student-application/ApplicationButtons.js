import React from 'react';

export function ApplicationSubmitButtons (props) {

	//validate form. if no errors, handle submit form
	function reportValidity() {
		const submit = props.form.current.reportValidity();
		submit 
			? props.handleSubmit(null, props.formData, false)
			: props.form.current.reportValidity();
	}

	return (
		<div className='application-page-submit-container'>
	    	<button onClick={() => props.handleApplicationStep('-')}>Previous</button>
	    	<input
	    		type='submit'
	    		value='Save & Continue'
	    	/>
	    	<p onClick={reportValidity}>Save & Finish Later</p>
	    </div>	
	)
}

export function ApplicationEditButtons (props) {
	return (
		<div className='application-page-submit-container'>
	    	<button onClick={() => props.handleApplicationStep('-')}>Previous</button>	    	
	    	<button onClick={() => props.handleApplicationStep('+')}>Next</button>
	    </div>	
	)
}