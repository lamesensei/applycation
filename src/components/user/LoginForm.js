import React, { Component } from 'react';
import { AuthConsumer } from '../auth/AuthContext';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input } from 'reactstrap';

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

  redirectHandler = (who) => {
    if (who) {
      this.props.history.push('/');
    }
  };

  componentDidMount = () => {
    this.redirectHandler(localStorage.who);
  };

  render() {
    return (
      <div className="container">
        <h3>Log In</h3>
        <br />
        <AuthConsumer>
          {({ login, who }) => {
            return (
              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  try {
                    (await login(this.state.username, this.state.password))
                      ? this.redirectHandler(who)
                      : console.log('fail');
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i class="fas fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={this.usernameHandler}
                    type="text"
                    value={this.state.username}
                    placeholder="Username"
                    required
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i class="fas fa-key" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={this.passwordHandler}
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    required
                  />
                </InputGroup>
                <br />
                <Button color="danger" type="submit">
                  <i class="fas fa-sign-in-alt" /> Submit
                </Button>
              </form>
            );
          }}
        </AuthConsumer>
      </div>
    );
  }
}

export default Login;
