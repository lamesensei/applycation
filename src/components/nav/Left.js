import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';

class Left extends Component {
  render() {
    return (
      <Nav vertical fill>
        <Link className="nav-link nav-item" to="/job/apply" data-toggle="pills">
          New Job
        </Link>
        <Link className="nav-link nav-item" to="/jobs" data-toggle="pills">
          List Jobs
        </Link>
      </Nav>
    );
  }
}

export default Left;
