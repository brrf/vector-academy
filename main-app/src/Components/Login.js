import React, {useState} from 'react';
import Warning from './Warning';
import '../css/index.css';
import '../css/forms.css';
import '../css/register.css';

export default function Login ({loginFunction}) {
  const [formData, updateFormData] = useState({
    password: '',
    email: ''
  });
  const [errors, updateErrors] = useState([]);

  function handleSubmit (e) {
    e.preventDefault();

    if (!formData.password || !formData.email) {
      updateErrors(['Please fill out all the fields']);
      return;
    }
    
    fetch(`${PROTOCOL}${DOMAIN}/studentlogin`, {
      method: "POST",
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
            loginFunction();
        }
      });
  };

  function updatePassword (e) {
    updateFormData({
      ...formData,
      password: e.target.value
    })
  };

  function updateEmail (e) {
    updateFormData({
      ...formData,
      email: e.target.value
    })
  };

  return (
    <React.Fragment>
      <div id="form-container" className="register-form-container">
        <Warning errors={errors}/>
        <form>
          <h2>Login</h2>
          <input
            className="form-full-width"
            type="email"
            name="email"
            autoComplete="email"
            onChange={(e) => updateEmail(e)}
            placeholder='E-mail'
            value={formData.email}
          />
          <input
            className="form-full-width"
            type="password"
            name="password"
            autoComplete="new-password"
            onChange={(e) => updatePassword(e)}
            placeholder='Confirm Password'
            value={formData.password}
          />
          <div>
            <button onClick={handleSubmit}>Login</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
