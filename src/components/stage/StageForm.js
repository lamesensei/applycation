import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Stage from '../functions/stage';

class StageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      notes: ''
    };
  }

  changeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    Stage.create(this.state.name, this.state.notes, this.props.jobId, this.props.toggleOff);
  };

  render() {
    return (
      <div>
        <h3>Add Stage</h3>
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              placeholder="Enter stage title"
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="companyName">Notes</Label>
            <Input
              type="textarea"
              name="notes"
              id="notes"
              placeholder="Enter notes"
              value={this.state.notes}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default StageForm;
