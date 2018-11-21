import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import Poc from '../functions/poc';

class PocForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      role: '',
      email: '',
      tel: ''
    };
  }

  changeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    Poc.create(
      this.state.name,
      this.state.role,
      this.state.email,
      this.state.tel,
      this.props.jobId,
      this.props.toggleOff
    );
  };

  render() {
    return (
      <div className="m-2">
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
              <Input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                placeholder="Enter PoC name"
                required
                onChange={this.changeHandler}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Notes</InputGroupAddon>
              <Input
                type="text"
                name="role"
                id="role"
                placeholder="Enter PoC role"
                value={this.state.role}
                onChange={this.changeHandler}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="poc@email.com"
                value={this.state.email}
                onChange={this.changeHandler}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Telephone</InputGroupAddon>
              <Input
                type="text"
                name="tel"
                id="tel"
                placeholder="+65 12345678"
                value={this.state.tel}
                onChange={this.changeHandler}
              />
            </InputGroup>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default PocForm;
