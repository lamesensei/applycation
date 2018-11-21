import React, { Component } from 'react';
import Job from '../functions/job';
import { Button, UncontrolledAlert } from 'reactstrap';
import StageForm from '../stage/StageForm';
import StagePanel from '../stage/StagePanel';
import JobNav from './JobNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PocPanel from '../poc/PocPanel';

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
    let toRender = null;

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

    const stageContainer = (
      <div>
        <div className="mt-2 mb-2">
          <Button size="sm" onClick={this.toggleStageForm}>
            Add Stage
          </Button>
        </div>
        {this.state.showStageForm && (
          <StageForm jobId={this.props.match.params.id} toggleOff={this.toggleStageForm} />
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

    const pocs = <PocPanel />;
    switch (this.state.currentTab) {
      case 'stages':
        toRender = stageContainer;
        break;
      case 'poc':
        toRender = pocs;
        break;
      default:
        break;
    }
    return (
      <div>
        {this.state.title ? (
          <h1>
            {this.state.title}, <small>{this.state.company.name}</small>
          </h1>
        ) : (
          <h1>
            <FontAwesomeIcon icon="spinner" spin />
          </h1>
        )}
        <JobNav changeTab={this.changeTab} currentTab={this.state.currentTab} />
        <div>{toRender}</div>
      </div>
    );
  }
}

export default JobView;
