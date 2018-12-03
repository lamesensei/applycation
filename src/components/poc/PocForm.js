import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Card, CardBody, CardTitle } from 'mdbreact';
import Poc from '../functions/poc';

class PocForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      role: '',
      email: '',
      tel: '',
      image: '',
      fileName: ''
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

  fileHandler = (event) => {
    const file = event.target.files[0];
    this.setState({
      image: file,
      fileName: file.name
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
      this.state.image,
      this.props.toggleOff
    );
  };

  render() {
    return (
      <Card className="w-75 mb-3">
        <CardBody>
          <CardTitle>Add Point of Contact</CardTitle>
          <Form onSubmit={this.submitHandler}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  placeholder="John Doe / HR Department"
                  required
                  onChange={this.changeHandler}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Role</InputGroupAddon>
                <Input
                  type="text"
                  name="role"
                  id="role"
                  placeholder="Hiring Manager / Boss"
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
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Upload</span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="fileinput"
                    onChange={this.fileHandler}
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label className="custom-file-label" htmlFor="fileinput">
                    {this.state.fileName}
                  </label>
                </div>
              </div>
            </div>
            <Button color="red" type="submit" size="sm">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default PocForm;
