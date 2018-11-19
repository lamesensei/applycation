import React, { Component } from 'react';
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

  //   redirectHandler = () => {
  //     if (localStorage.isAuth !== 'false') {
  //       console.log('rerouting', localStorage.isAuth);
  //       this.props.history.push('/');
  //     }
  //   };

  render() {
    return (
      <AuthConsumer>
        {({ login }) => {
          return (
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                try {
                  await login(this.state.username, this.state.password);
                  //this.redirectHandler();
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <input
                onChange={this.usernameHandler}
                type="text"
                value={this.state.username}
                required
              />
              <input
                onChange={this.passwordHandler}
                type="password"
                value={this.state.password}
                required
              />
              <button type="submit">Login</button>
            </form>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default Login;
