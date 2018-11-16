import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Auth from '../../functions/auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    };
  }

  usernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  isLoggedin = (status) => {
    this.setState({ loggedIn: status });
    return status;
  };

  loginHandler = (event) => {
    Auth.authenticate(this.state.username, this.state.password, this.isLoggedin);
  };

  render() {
    console.log('is loggedin: ', this.state.loggedIn);
    return (
      <div>
        <input onChange={this.usernameHandler} type="text" value={this.state.username} />
        <input onChange={this.passwordHandler} type="password" value={this.state.password} />
        <Button onClick={this.loginHandler}>Login</Button>
      </div>
    );
  }
}

export default Login;
