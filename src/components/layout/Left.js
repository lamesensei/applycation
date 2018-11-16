import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink } from 'reactstrap';

export default class Left extends Component {
  render() {
    let logoutButton;
    if (localStorage.loggedIn) {
      logoutButton = (
        <NavLink href="#" onClick={this.props.logout}>
          Log Out
        </NavLink>
      );
    }
    return (
      <Nav vertical>
        <Link className="nav-link" to="/test1">
          test1
        </Link>
        <Link className="nav-link" to="/test2">
          test2
        </Link>
        <Link className="nav-link" to="/login">
          login
        </Link>
        {logoutButton}
      </Nav>
    );
  }
}
