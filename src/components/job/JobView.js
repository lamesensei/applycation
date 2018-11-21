import React, { Component } from 'react';
import Job from '../functions/job';
import StagePanel from '../stage/StagePanel';
import JobNav from './JobNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PocPanel from '../poc/PocPanel';
import StageContainer from '../stage/StageContainer';

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
      <StageContainer
        toggleStageForm={this.toggleStageForm}
        showStageForm={this.state.showStageForm}
        id={this.props.match.params.id}
        stageCreated={this.state.stageCreated}
        stageDeleted={this.state.stageDeleted}
        stages={stages}
      />
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
