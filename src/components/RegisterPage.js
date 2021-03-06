import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUserAction } from '../actions/AuthenticationActions';

class RegisterPage extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let username = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      username, email, password
    };

    this.props.dispatch(registerUserAction(data));
  };

  render() {
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty('response')) {
      isSuccess = this.props.response.register.response.status;
      if (isSuccess) {
        localStorage.removeItem('token');
        localStorage.setItem('token', this.props.response.register.response.Authorization);
        return (
          <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} />
        );
      }
      message = this.props.response.register.response.message;
    }

    return (
      <div>
        <h3>RegisterPage</h3>
        {!isSuccess ? <div>{message}</div> : ''}
        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have account? <Link to='login'>Login here</Link>
      </div>
    )
  }
}

const mapStateToProps = (response) => ({
  response
});


const RegisterViewContainer = connect(
  mapStateToProps,
  null,
)(RegisterPage);


export default RegisterViewContainer;

