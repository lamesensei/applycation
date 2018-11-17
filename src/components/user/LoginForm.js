import React, { Component } from 'react';
import Auth from '../../functions/auth';
import { AuthConsumer } from '../auth/AuthContext';

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

  //   loginHandler = (event) => {
  //     event.preventDefault();
  //   };

  render() {
    return (
      <AuthConsumer>
        {({ login }) => {
          return (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                login(this.state.username, this.state.password);
              }}
            >
              <input onChange={this.usernameHandler} type="text" value={this.state.username} />
              <input onChange={this.passwordHandler} type="password" value={this.state.password} />
              <button type="submit">Login</button>
            </form>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default Login;
