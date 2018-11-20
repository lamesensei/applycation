import React, { Component } from 'react';
import { AuthConsumer } from '../auth/AuthContext';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

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
    if (who) this.props.history.push('/jobs');
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
                    await login(this.state.username, this.state.password);
                    this.props.history.push('/jobs');
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-user" />
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
                      <i className="fas fa-key" />
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
                  <i className="fas fa-sign-in-alt" /> Submit
                </Button>
                <br />
                <Link to="/signup">No account? Sign up here.</Link>
              </form>
            );
          }}
        </AuthConsumer>
      </div>
    );
  }
}

export default Login;
