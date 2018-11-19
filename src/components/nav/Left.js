import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';

class Left extends Component {
  render() {
    return (
      <Nav vertical>
        <Link className="nav-link" to="/job/apply">
          New Job
        </Link>
        <Link className="nav-link" to="/jobs">
          List Jobs
        </Link>
      </Nav>
    );
  }
}

export default Left;
