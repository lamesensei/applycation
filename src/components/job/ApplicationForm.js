import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import Job from '../functions/job';

class ApplicationForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      companyName: '',
      id: localStorage.id
    };
  }

  sucessHandler = (id) => {
    this.props.history.push(`${id}`);
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { title, companyName, id } = this.state;
    Job.create(title, companyName, id, this.sucessHandler);
  };

  changeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {
    if (!localStorage.id) this.props.history.push('/login');
  };
  render() {
    return (
      <div className="p-2">
        <h1>Track Applycation</h1>
        <br />
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
              <Input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                placeholder="Eg. CEO"
                required
                onChange={this.changeHandler}
              />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Company</InputGroupAddon>
              <Input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Eg. Google"
                value={this.state.companyName}
                required
                onChange={this.changeHandler}
              />
            </InputGroup>
          </FormGroup>

          <Button color="danger">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default ApplicationForm;
