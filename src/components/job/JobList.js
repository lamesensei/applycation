import React, { Component } from 'react';
import Job from '../functions/job';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class JobList extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };
  }

  populateJobs = (data) => {
    if (data.length >= 1) this.setState({ jobs: [...data] });
  };

  componentDidMount = () => {
    localStorage.id ? Job.list(localStorage.id, this.populateJobs) : this.props.history.push('/');
  };
  render() {
    console.log(this.state.jobs);
    const jobs = this.state.jobs.map((item) => {
      return (
        <ListGroupItem>
          <ButtonGroup>
            <Button outline color="secondary">
              <Link to={`/job/${item.id}`}>{item.title}</Link>
            </Button>

            <Button>Stages</Button>
            {item.stages.map((stage) => {
              return <Button>{stage.name}</Button>;
            })}
          </ButtonGroup>
        </ListGroupItem>
      );
    });
    return (
      <div className="p-2">
        <h1>Jobs</h1>
        <ListGroup>{jobs}</ListGroup>
      </div>
    );
  }
}

export default JobList;
