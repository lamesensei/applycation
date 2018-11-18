import React, { Component } from 'react';
import Job from '../functions/job';
import { Button, UncontrolledAlert } from 'reactstrap';
import StageForm from '../stage/StageForm';
import StagePanel from '../stage/StagePanel';

class ShowJob extends Component {
  constructor(props) {
    super(props);
    this.jobId = props.match.params.id;
    this.state = {
      title: undefined,
      company: {},
      showStageForm: false,
      stageCreated: undefined,
      stages: []
    };
  }

  updateTitle = (data) => {
    const { title, company } = data;
    this.setState({
      title: title,
      company: company
    });
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

  componentDidMount = () => {
    Job.find(this.jobId, this.updateTitle);
    Job.stages(this.jobId, this.populateStages);
  };

  render() {
    const stages = this.state.stages.map((item) => {
      return <StagePanel key={item.id} name={item.name} notes={item.value} />;
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
        <div>
          <Button onClick={this.toggleStageForm}>Add Stage</Button>
        </div>
        {this.state.showStageForm ? (
          <div>
            <StageForm jobId={this.props.match.params.id} toggleOff={this.toggleStageForm} />
          </div>
        ) : (
          <div>
            {this.state.stageCreated && (
              <UncontrolledAlert color="success">
                {this.state.stageCreated} created!
              </UncontrolledAlert>
            )}
          </div>
        )}
        <div>{stages}</div>
      </div>
    );
  }
}

export default ShowJob;
