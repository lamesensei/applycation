import React, { Component } from 'react';
import { InputGroupAddon, InputGroup, Input, Form, FormGroup } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, ListGroup, Button, CardFooter } from 'mdbreact';

import Stage from '../functions/stage';
import TaskItem from '../task/TaskItem';
import Task from '../functions/task';
import moment from 'moment';

class StagePanel extends Component {
  constructor(props) {
    super(props);
    this.dueWhen = moment(props.due, moment.ISO_8601).fromNow();
    this.dueDate = moment(props.due, moment.ISO_8601).format('Do MMM YYYY - hh:mm a');
    this.state = {
      task: '',
      tasks: []
    };
  }

  populateTasks = (data) => {
    this.setState({ tasks: [...data], task: '' });
  };

  updateTasks = (data) => {
    Stage.tasks(this.props.id, this.populateTasks);
  };

  clickAdd = (event) => {
    event.preventDefault();
    Task.create(this.state.task, this.props.id, this.updateTasks);
  };

  clickDelete = () => {
    Stage.destroy(this.props.id, this.props.deleteHandler);
  };

  componentDidMount = () => {
    Stage.tasks(this.props.id, this.populateTasks);
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
    const taskItems = this.state.tasks.map((item) => {
      return (
        <TaskItem key={item.id} id={item.id} value={item.value} updateTasks={this.updateTasks} />
      );
    });
    return (
      <Card className="mb-3">
        <CardBody>
          <button onClick={this.clickDelete} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <CardTitle>
            {this.props.name} <small className="text-muted">on {this.dueDate}</small>
          </CardTitle>
          <CardText>{this.props.notes}</CardText>
          <CardText small muted>
            Due {this.dueWhen}
          </CardText>
        </CardBody>
        <hr />
        <CardBody>
          {this.state.tasks.length === 0 ? (
            <CardTitle className="text-center">You are all set!</CardTitle>
          ) : (
            <CardTitle>Tasks</CardTitle>
          )}
          <ListGroup>{taskItems}</ListGroup>
        </CardBody>
        <CardFooter className="text-muted">
          <Form onSubmit={this.clickAdd}>
            <FormGroup className="mb-0">
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend">Add Task</InputGroupAddon>
                <Input
                  type="text"
                  name="task"
                  id="task"
                  placeholder="Eg. prepare for ..."
                  value={this.state.input}
                  required
                  onChange={this.changeHandler}
                />
                <InputGroupAddon addonType="append">
                  <Button type="submit" color="success">
                    <i className="fas fa-plus" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </CardFooter>
      </Card>
    );
  }
}

export default StagePanel;
