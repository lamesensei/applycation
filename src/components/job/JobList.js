import React, { Component } from 'react';
import Job from '../functions/job';
import { UncontrolledAlert } from 'reactstrap';
import { Badge, MDBRow } from 'mdbreact';
import JobItem from './JobItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

class JobList extends Component {
  constructor() {
    super();
    this.state = {
      isEmpty: false,
      jobs: [],
      inactiveJobs: [],
      jobDeleted: ''
    };
  }

  populateJobs = (data, isEmpty) => {
    console.log(data);
    let activeJobs = [];
    let inactiveJobs = [];
    if (!isEmpty) {
      data.forEach((item) => {
        let dueDate = '';
        let currentDate = moment();
        if (item.stages.length > 0) {
          dueDate = moment(item.stages[0].due, moment.ISO_8601);
          if (parseInt(currentDate.diff(dueDate, 'days')) > 13) inactiveJobs.push(item);
          else activeJobs.push(item);
        } else {
          activeJobs.push(item);
        }
      });
      this.setState({
        jobs: [...activeJobs],
        inactiveJobs: [...inactiveJobs],
        isEmpty: activeJobs.length > 1 ? false : true
      });
    } else
      this.setState({
        jobs: [],
        inactiveJobs: [],
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

    const inactiveJobs = this.state.inactiveJobs.map((item) => {
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
        <div className="p-5">
          {this.state.jobDeleted && (
            <UncontrolledAlert color="danger">{this.state.jobDeleted} deleted!</UncontrolledAlert>
          )}
          <h1>
            Active Applications <Badge color="red">{this.state.jobs.length}</Badge>
          </h1>
          {loading}
          <MDBRow>{jobs}</MDBRow>
          <hr />
          <h1>
            Inactive Applications <Badge color="red">{this.state.inactiveJobs.length}</Badge>
          </h1>
          <MDBRow>{inactiveJobs}</MDBRow>
        </div>
      </React.Fragment>
    );
  }
}

export default JobList;
