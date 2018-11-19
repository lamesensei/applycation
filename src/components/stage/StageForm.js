import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
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
                placeholder="Enter stage title"
                required
                onChange={this.changeHandler}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Notes</InputGroupAddon>
              <Input
                type="textarea"
                name="notes"
                id="notes"
                placeholder="Enter notes"
                value={this.state.notes}
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

export default StageForm;
