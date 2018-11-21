import React, { Component } from 'react';
import { Button, UncontrolledAlert } from 'reactstrap';
import StageForm from '../stage/StageForm';

class StageContainer extends Component {
  render() {
    return (
      <div>
        <div className="mt-2 mb-2">
          <Button size="sm" onClick={this.props.toggleStageForm}>
            Add Stage
          </Button>
        </div>
        {this.props.showStageForm && (
          <StageForm jobId={this.props.id} toggleOff={this.props.toggleStageForm} />
        )}
        <div>
          {this.props.stageCreated && (
            <UncontrolledAlert color="success">
              {this.props.stageCreated} created!
            </UncontrolledAlert>
          )}
          {this.props.stageDeleted && (
            <UncontrolledAlert color="danger">{this.props.stageDeleted} deleted!</UncontrolledAlert>
          )}
        </div>
        {this.props.stages}
      </div>
    );
  }
}

export default StageContainer;
