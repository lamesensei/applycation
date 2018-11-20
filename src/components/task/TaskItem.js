import React, { Component } from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import Task from '../functions/task';

class TaskItem extends Component {
  clickHandler = () => {
    Task.destroy(this.props.id, this.props.updateTasks);
  };
  render() {
    return (
      <ListGroupItem className="d-flex justify-content-between">
        {this.props.value}
        <Button onClick={this.clickHandler} size="sm">
          <i className="fas fa-times" />
        </Button>
      </ListGroupItem>
    );
  }
}

export default TaskItem;
