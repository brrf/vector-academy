import React from 'react';
import Warning from './Warning';
import '../css/index.css';
import '../css/forms.css';
import '../css/register.css';

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        password: "",
        password2: "",
        email: ""
      },
      errors: [],
      redirect: false
    };
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePassword2 = this.updatePassword2.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  componentDidMount() {
    console.log('here');
    fetch(`${PROTOCOL}apply.${DOMAIN}/user`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(resObject => {
        console.log(resObject);
      })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      errors: []
    });
    
    fetch(`${PROTOCOL}apply.${DOMAIN}/register`, {
      method: "POST",
      body: JSON.stringify(this.state.formData),
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
      .then(res => res.json())
      .then(resObject => {
        if (resObject.errors) {
          resObject.errors.forEach(error => {
            console.log(error);
            this.setState({
              errors: [...this.state.errors, error]
            });
          });
        } else {
          console.log('worked');
        }
      });
  };

  updatePassword = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        password: e.target.value
      }
    });
  };

  updatePassword2 = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        password2: e.target.value
      }
    });
  };

  updateUsername = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        username: e.target.value
      }
    });
  };

  updateEmail = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        email: e.target.value
      }
    });
  };

  render() { 
    console.log('here');
    return (
      <React.Fragment>
        <div id="form-container" className="register-form-container">
          <Warning errors={this.state.errors}/>
          <form>
            <h2>Register</h2>
            <input
              className="form-full-width"
              type="email"
              name="email"
              autoComplete="email"
              onChange={this.updateEmail}
              placeholder='E-mail'
              value={this.state.formData.email}
            />
            <input
              className="form-full-width"
              type="password"
              name="password"
              autoComplete="new-password"
              onChange={this.updatePassword}
              placeholder='Password'
              value={this.state.formData.password}
            />
            <input
              className="form-full-width"
              type="password"
              name="password2"
              autoComplete="new-password"
              onChange={this.updatePassword2}
              placeholder='Confirm Password'
              value={this.state.formData.password2}
            />
            <div>
              <button onClick={this.handleSubmit}>Register</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
