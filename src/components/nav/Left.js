import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';

class Left extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <Nav className="mt-3 flex-md-column">
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
        {/* <p className="text-center text-white d-none d-lg-block d-xl-none">
          made by <strong>LJ</strong>
        </p> */}
      </div>
    );
  }
}

export default Left;
