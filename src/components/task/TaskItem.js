import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

class TaskItem extends Component {
  render() {
    return <ListGroupItem>{this.props.value}</ListGroupItem>;
  }
}

export default TaskItem;
