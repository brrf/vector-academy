import React from 'react';
import Warning from './Warning';
import '../css/index.css';
import '../css/forms.css';
import '../css/register.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        password: "",
        email: ""
      },
      errors: [],
      redirect: false
    };
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  // componentDidMount() {
  //   fetch("http://apply.localhost:3001/user", {
  //     method: "GET"
  //   })
  //     .then(res => res.json())
  //     .then(resObject => {
  //       console.log('fetch worked');
  //     })
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      errors: []
    });
    
    fetch("http://apply.localhost:3001/studentlogin", {
      method: "POST",
      body: JSON.stringify(this.state.formData),
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
          resObject.errors.forEach(error => {
            console.log(error);
            this.setState({
              errors: [...this.state.errors, error]
            });
          });
        } else {
          console.log(resObject.user);
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

  updateEmail = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        email: e.target.value
      }
    });
  };

  render() { 
    return (
      <React.Fragment>
        <div id="form-container" className="register-form-container">
          <Warning errors={this.state.errors}/>
          <form>
            <h2>Login</h2>
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
              placeholder='Confirm Password'
              value={this.state.formData.password}
            />
            <div>
              <button onClick={this.handleSubmit}>Login</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
