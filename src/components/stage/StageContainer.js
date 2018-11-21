import React, { Component } from 'react';
import { Button, UncontrolledAlert } from 'reactstrap';
import StageForm from './StageForm';
import StagePanel from './StagePanel';
import Job from '../functions/job';

class StageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobId: props.jobId,
      showForm: false,
      stageCreated: undefined,
      stageDeleted: undefined,
      stages: []
    };
  }
  populateStages = (data) => {
    this.setState({ stages: [...data.stages] });
  };

  toggleStageForm = (data) => {
    Job.stages(this.state.jobId, this.populateStages);
    this.setState({
      showStageForm: !this.state.showStageForm,
      stageCreated: data.name
    });
  };

  deleteHandler = (name) => {
    this.setState({ stageDeleted: name });
    Job.stages(this.state.jobId, this.populateStages);
  };
  componentDidMount = () => {
    if (localStorage.id) {
      Job.stages(this.state.jobId, this.populateStages);
    }
  };

  render() {
    const stages = this.state.stages
      .slice(0)
      .reverse()
      .map((item) => {
        return (
          <StagePanel
            key={item.id}
            id={item.id}
            name={item.name}
            due={item.due}
            notes={item.value}
            deleteHandler={this.deleteHandler}
          />
        );
      });
    return (
      <div>
        <div className="mt-2 mb-2">
          <Button size="sm" onClick={this.toggleStageForm}>
            Add Stage
          </Button>
        </div>
        {this.state.showStageForm && (
          <StageForm jobId={this.state.jobId} toggleOff={this.toggleStageForm} />
        )}
        <div>
          {this.state.stageCreated && (
            <UncontrolledAlert color="success">
              {this.state.stageCreated} created!
            </UncontrolledAlert>
          )}
          {this.state.stageDeleted && (
            <UncontrolledAlert color="danger">{this.state.stageDeleted} deleted!</UncontrolledAlert>
          )}
        </div>
        {stages}
      </div>
    );
  }
}

export default StageContainer;
