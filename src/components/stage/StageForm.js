import React, { Component } from 'react';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Button, Card, CardBody, CardTitle } from 'mdbreact';
import moment from 'moment';

import Stage from '../functions/stage';

class StageForm extends Component {
  constructor(props) {
    super(props);
    this.now = moment().format(moment.HTML5_FMT.DATETIME_LOCAL);
    this.state = {
      name: '',
      notes: '',
      due: this.now
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
    const convertedTime = moment(this.state.due, moment.HTML5_FMT.DATETIME_LOCAL).toISOString();
    Stage.create(
      this.state.name,
      this.state.notes,
      convertedTime,
      this.props.jobId,
      this.props.toggleOff
    );
  };

  render() {
    return (
      <Card className="m-3">
        <CardBody>
          <CardTitle>Add Stage</CardTitle>
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
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Due </InputGroupAddon>
                <Input
                  type="datetime-local"
                  name="due"
                  id="due"
                  value={this.state.due}
                  onChange={this.changeHandler}
                />
              </InputGroup>
            </FormGroup>
            <Button type="submit" size="sm">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default StageForm;
