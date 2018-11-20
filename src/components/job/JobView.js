import React, { Component } from 'react';
import Job from '../functions/job';
import { Button, UncontrolledAlert, Collapse } from 'reactstrap';
import StageForm from '../stage/StageForm';
import StagePanel from '../stage/StagePanel';
import JobNav from './JobNav';
import moment, { ISO_8601 } from 'moment';

class JobView extends Component {
  constructor(props) {
    super(props);
    this.jobId = props.match.params.id;
    this.state = {
      title: undefined,
      company: {},
      showStageForm: false,
      stageCreated: undefined,
      stageDeleted: undefined,
      stages: [],
      currentTab: 'stages'
    };
  }

  updateTitle = (data) => {
    const { title, company } = data;
    this.setState({
      title: title,
      company: company
    });
  };

  changeTab = (event) => {
    const attribute = event.target.parentElement.getAttribute('name');
    this.setState({ currentTab: attribute });
  };

  populateStages = (data) => {
    this.setState({ stages: [...data.stages] });
  };

  toggleStageForm = (data) => {
    Job.stages(this.jobId, this.populateStages);
    this.setState({
      showStageForm: !this.state.showStageForm,
      stageCreated: data.name
    });
  };

  deleteHandler = (name) => {
    this.setState({ stageDeleted: name });
    Job.stages(this.jobId, this.populateStages);
  };

  componentDidMount = () => {
    if (localStorage.id) {
      Job.find(this.jobId, this.updateTitle);
      Job.stages(this.jobId, this.populateStages);
    }
  };

  render() {
    const stages = this.state.stages.map((item) => {
      return (
        <StagePanel
          key={item.id}
          id={item.id}
          name={item.name}
          due={moment(item.due, ISO_8601).fromNow()}
          notes={item.value}
          deleteHandler={this.deleteHandler}
        />
      );
    });
    return (
      <div>
        {this.state.title ? (
          <h1 className="tada">
            {this.state.title}, <small>{this.state.company.name}</small>
          </h1>
        ) : (
          <h1 className="tada">Loading</h1>
        )}
        <JobNav changeTab={this.changeTab} currentTab={this.state.currentTab} />
        <div className="mt-2 mb-2">
          <Button color="primary" size="sm" onClick={this.toggleStageForm}>
            Add Stage
          </Button>
        </div>
        <Collapse isOpen={this.state.showStageForm}>
          <StageForm jobId={this.props.match.params.id} toggleOff={this.toggleStageForm} />
        </Collapse>
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
        <div>{stages}</div>
      </div>
    );
  }
}

export default JobView;
