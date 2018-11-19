import React, { Component } from 'react';
import Job from '../functions/job';
import { UncontrolledAlert, Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import JobItem from './JobItem';

class JobList extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      jobDeleted: ''
    };
  }

  populateJobs = (data) => {
    if (data.length >= 1) this.setState({ jobs: [...data] });
  };

  deleteHandler = (name) => {
    this.setState({ jobDeleted: name });
    Job.list(localStorage.id, this.populateJobs);
  };

  componentDidMount = () => {
    localStorage.id ? Job.list(localStorage.id, this.populateJobs) : this.props.history.push('/');
  };

  render() {
    console.log(this.state.jobs);
    const jobs = this.state.jobs.map((item) => {
      return (
        <JobItem
          key={item.id}
          id={item.id}
          title={item.title}
          notes={item.notes}
          job={item}
          deleteHandler={this.deleteHandler}
        />
      );
    });
    return (
      <div className="p-2">
        <h1>Jobs</h1>
        {this.state.jobDeleted && (
          <UncontrolledAlert color="danger">{this.state.jobDeleted} deleted!</UncontrolledAlert>
        )}
        <ListGroup>{jobs}</ListGroup>
      </div>
    );
  }
}

export default JobList;
