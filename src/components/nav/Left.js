import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';

class Left extends Component {
  render() {
    return (
      <div className="h-100 d-flex flex-column justify-content-between align-items-between">
        <Nav className="mt-3" vertical>
          <Link className="nav-link nav-item text-white" to="/profile" data-toggle="pills">
            <strong>Profile</strong>
          </Link>
          <Link className="nav-link nav-item text-white" to="/job/apply" data-toggle="pills">
            <strong>Apply</strong>
          </Link>
          <Link className="nav-link nav-item text-white" to="/jobs" data-toggle="pills">
            <strong>Applications</strong>
          </Link>
        </Nav>
        <p className="text-center text-white">
          made by <strong>LJ</strong>
        </p>
      </div>
    );
  }
}

export default Left;
