import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import User from '../functions/user';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      tel: ''
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { username, password, firstName, lastName, email, tel } = this.state;
    User.create(username, password, firstName, lastName, email, tel, console.log);
    this.props.history.push('/login');
  };

  changeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="p-2">
        <h3>Sign Up</h3>
        <br />
        <form onSubmit={this.submitHandler}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fas fa-user" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={this.changeHandler}
              type="text"
              name="username"
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
              onChange={this.changeHandler}
              name="password"
              type="password"
              value={this.state.password}
              placeholder="Password"
              required
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>First Name</InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={this.changeHandler}
              name="firstName"
              type="text"
              value={this.state.firstName}
              placeholder="First Name"
              required
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Last Name</InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={this.changeHandler}
              name="lastName"
              type="text"
              value={this.state.lastName}
              placeholder="Last Name"
              required
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Email</InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={this.changeHandler}
              name="email"
              type="text"
              value={this.state.email}
              placeholder="Email"
              required
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Telephone</InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={this.changeHandler}
              name="tel"
              type="text"
              value={this.state.tel}
              placeholder="Telephone Number"
              required
            />
          </InputGroup>
          <br />
          <Button color="danger" type="submit">
            <i className="fas fa-sign-in-alt" /> Submit
          </Button>
          <br />
          <Link to="/login">Already registered? Login here.</Link>
        </form>
      </div>
    );
  }
}

export default SignupForm;
