import React, { Component } from 'react';
import Job from '../functions/job';

class ShowJob extends Component {
  constructor() {
    super();
    this.state = {
      title: undefined,
      company: {}
    };
  }

  updatePage = (data) => {
    const { title, company } = data;
    this.setState({
      title: title,
      company: company
    });
  };

  componentDidMount = () => {
    Job.find(this.props.match.params.id, this.updatePage);
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.title ? (
            <h1 className="tada">
              {this.state.title}, <small>{this.state.company.name}</small>
            </h1>
          ) : (
            <h1 className="d-none">Loading</h1>
          )}
        </h1>
      </div>
    );
  }
}

export default ShowJob;
