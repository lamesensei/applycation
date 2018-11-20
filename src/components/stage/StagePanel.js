import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button,
  ListGroup,
  InputGroupAddon,
  InputGroup,
  Input,
  Form,
  FormGroup
} from 'reactstrap';

import Stage from '../functions/stage';
import TaskItem from '../task/TaskItem';
import Task from '../functions/task';
import moment from 'moment';

class StagePanel extends Component {
  constructor(props) {
    super(props);
    console.log(props.due);
    this.dueWhen = moment(props.due, moment.ISO_8601).fromNow();
    this.dueDate = moment(props.due, moment.ISO_8601).format('Do MMM YYYY, HHmm') + 'H';
    this.state = {
      task: '',
      tasks: []
    };
  }

  populateTasks = (data) => {
    console.log(data);
    this.setState({ tasks: [...data] });
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
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    const taskItems = this.state.tasks.map((item) => {
      return <TaskItem key={item.id} value={item.value} />;
    });
    return (
      <Card className="mb-2">
        {/* <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        /> */}
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardSubtitle>Due {this.dueWhen}</CardSubtitle>
          <CardText>{this.props.notes}</CardText>
        </CardBody>
        <ListGroup flush>{taskItems}</ListGroup>
        <CardBody>
          <Form onSubmit={this.clickAdd}>
            <FormGroup>
              <InputGroup>
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
                  <Button color="success">
                    <i className="fas fa-plus" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </CardBody>
        <CardFooter className="text-muted">
          {this.dueDate}
          <Button className="float-right" size="sm" color="danger" onClick={this.clickDelete}>
            <i className="fas fa-trash-alt" />
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

export default StagePanel;
