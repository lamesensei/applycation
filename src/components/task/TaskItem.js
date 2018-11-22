import React, { Component } from 'react';
import { ListGroupItem, Button } from 'mdbreact';
import Task from '../functions/task';

class TaskItem extends Component {
  clickHandler = () => {
    Task.destroy(this.props.id, this.props.updateTasks);
  };
  render() {
    return (
      <ListGroupItem className="d-flex justify-content-between align-items-center">
        {this.props.value}
        <Button onClick={this.clickHandler} size="sm">
          <i className="fas fa-check" />
        </Button>
      </ListGroupItem>
    );
  }
}

export default TaskItem;
