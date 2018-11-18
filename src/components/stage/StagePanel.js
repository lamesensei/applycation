import React, { Component } from 'react';

class StagePanel extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.notes}</p>
      </div>
    );
  }
}

export default StagePanel;
