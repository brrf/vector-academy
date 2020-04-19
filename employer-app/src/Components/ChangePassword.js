import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {updateUser} from '../actions/user';
import Warning from './Warning';	


function ChangePassword (props) {
	const [errors, updateErrors] = useState([]);
	const [formData, updateFormData] = useState({
		password: '',
		password2: ''
	})


	function updatePassword(e) {
		updateFormData({
			...formData,
			password: e.target.value
		})
	}

	function updatePassword2(e) {
		updateFormData({
			...formData,
			password2: e.target.value
		})
	}

	function handleSubmit(e) {
		e.preventDefault();

	    if (!formData.password || !formData.password2) {
	      updateErrors(['Please fill out all the fields']);
	      return;
	    }

	    if (formData.password !== formData.password2) {
	    	updateErrors(['Passwords do not match']);
	    	return;
	    }
    
	    fetch(`${PROTOCOL}${DOMAIN}/changepassword`, {
	      method: "PUT",
	      body: JSON.stringify(formData),
	      headers: { 
	        "Content-Type": "application/json",
	        "Access-Control-Allow-Origin": "http://localhost:3000" 
	      },
	      mode: "cors",
	      credentials: "include"
	    })
	      .then(res => res.json())
	      .then(resObject => {
	        if (resObject.errors) {
	          let newErrors = [];
	          resObject.errors.forEach(error => {
	            newErrors.push(error);
	          });
	          updateErrors(newErrors);
	        } else {
	           props.dispatch(updateUser('originalPassword', false))
	        }
	    });
	}

	return (
		<div id='change-password-container'>
			<div className='change-password-modal'>
		        <Warning errors={errors}/>
				<form>
		          <h2>Change Password</h2>
		          <input
		            className="form-full-width"
		            type="password"
		            name="password"
		            autoComplete="password"
		            onChange={(e) => updatePassword(e)}
		            placeholder='Password'
		            value={formData.password}
		          />
		          <input
		            className="form-full-width"
		            type="password"
		            name="password2"
		            autoComplete="new-password"
		            onChange={(e) => updatePassword2(e)}
		            placeholder='Confirm Password'
		            value={formData.password2}
		          />
		          <div>
		            <button onClick={handleSubmit}>Submit</button>
		          </div>
		        </form>
		    </div>
	    </div>
	)
};


function mapStateToProps(state) {
  return {
  	user: state.user.user
  };
}

export default connect(mapStateToProps)(ChangePassword);