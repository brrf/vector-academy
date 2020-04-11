import React, {useState} from 'react';
//import {connect} from 'react-redux';	


export default function ChangePassword (props) {

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
			passwrod2: e.target.value
		})
	}

	function handleSubmit() {
		console.log('submitted');
	}

	return (
		<div id="form-container" className="register-form-container">
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
	)
};

// function mapStateToProps(state) {
//   return {
//   	user: state.user
//   };
// }

// export default connect(mapStateToProps)(UpgradeAdmin);