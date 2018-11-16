import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Auth from '../../functions/auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  usernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  loginHandler = (event) => {
    event.preventDefault();
    Auth.authenticate(this.state.username, this.state.password, this.props.setLogin);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.loginHandler}>
          <input onChange={this.usernameHandler} type="text" value={this.state.username} />
          <input onChange={this.passwordHandler} type="password" value={this.state.password} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
