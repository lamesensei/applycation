import React, { Component } from 'react';
import Job from '../functions/job';
import { Button } from 'reactstrap';
import StageForm from '../stage/StageForm';

class ShowJob extends Component {
  constructor() {
    super();
    this.state = {
      title: undefined,
      company: {},
      showStageForm: false
    };
  }

  updatePage = (data) => {
    const { title, company } = data;
    this.setState({
      title: title,
      company: company
    });
  };

  toggleStageForm = (data) => {
    console.log(data);
    this.setState({ showStageForm: !this.state.showStageForm });
  };

  componentDidMount = () => {
    Job.find(this.props.match.params.id, this.updatePage);
  };

  render() {
    return (
      <div>
        {this.state.title ? (
          <h1 className="tada">
            {this.state.title}, <small>{this.state.company.name}</small>
          </h1>
        ) : (
          <h1 className="d-none">Loading</h1>
        )}
        <div>
          <Button onClick={this.toggleStageForm}>Add Stage</Button>
        </div>
        {this.state.showStageForm ? (
          <div>
            <StageForm jobId={this.props.match.params.id} toggleOff={this.toggleStageForm} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default ShowJob;
