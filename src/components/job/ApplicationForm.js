import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
    if (!localStorage.id) this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Create new job application</h1>
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              placeholder="Enter application title"
              required
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="companyName">Company</Label>
            <Input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Enter company name"
              value={this.state.companyName}
              required
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default ApplicationForm;
