import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';

class Left extends Component {
  render() {
    return (
      <Nav vertical>
        <Link className="nav-link nav-item text-white" to="/profile" data-toggle="pills">
          <strong>Profile</strong>
        </Link>
        <Link className="nav-link nav-item text-white" to="/job/apply" data-toggle="pills">
          <strong>New Job</strong>
        </Link>
        <Link className="nav-link nav-item text-white" to="/jobs" data-toggle="pills">
          <strong>List Jobs</strong>
        </Link>
      </Nav>
    );
  }
}

export default Left;
