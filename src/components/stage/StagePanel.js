import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Stage from '../functions/stage';

class StagePanel extends Component {
  clickHandler = () => {
    Stage.destroy(this.props.id, this.props.deleteHandler);
  };
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center border p-2">
        <h3>{this.props.name}</h3>
        <span>{this.props.notes}</span>
        <Button size="sm" color="danger" onClick={this.clickHandler}>
          <i className="fas fa-trash-alt" />
        </Button>
      </div>
    );
  }
}

export default StagePanel;
