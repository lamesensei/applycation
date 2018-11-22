import React, { Component } from 'react';
import Job from '../functions/job';
import { UncontrolledAlert } from 'reactstrap';
import { Badge, MDBRow } from 'mdbreact';
import JobItem from './JobItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class JobList extends Component {
  constructor() {
    super();
    this.state = {
      isEmpty: false,
      jobs: [],
      jobDeleted: ''
    };
  }

  populateJobs = (data, isEmpty) => {
    if (!isEmpty)
      this.setState({
        jobs: [...data],
        isEmpty: false
      });
    else
      this.setState({
        jobs: [],
        isEmpty: true
      });
  };

  deleteHandler = (name) => {
    this.setState({ jobDeleted: name });
    Job.list(localStorage.id, this.populateJobs);
  };

  componentDidMount = () => {
    localStorage.id
      ? Job.list(localStorage.id, this.populateJobs)
      : this.props.history.push('/login');
  };

  render() {
    const jobs = this.state.jobs.map((item) => {
      return (
        <JobItem
          key={item.id}
          id={item.id}
          title={item.title}
          company={item.company.name}
          job={item}
          deleteHandler={this.deleteHandler}
        />
      );
    });
    let loading = null;
    if (!this.state.isEmpty && this.state.jobs.length === 0) {
      loading = (
        <h3>
          <FontAwesomeIcon icon="spinner" spin />
        </h3>
      );
    } else if (this.state.isEmpty && this.state.jobs.length === 0)
      loading = <h3>No applications found... Surein sure not happy...</h3>;

    return (
      <React.Fragment>
        {this.state.jobDeleted && (
          <UncontrolledAlert color="danger">{this.state.jobDeleted} deleted!</UncontrolledAlert>
        )}
        <div className="p-5">
          <h1>
            Active Applications <Badge color="red">{this.state.jobs.length}</Badge>
          </h1>
          {loading}
          <MDBRow>{jobs}</MDBRow>
        </div>
      </React.Fragment>
    );
  }
}

export default JobList;
