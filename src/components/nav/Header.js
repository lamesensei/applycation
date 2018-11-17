import React, { Component } from 'react';
import { AuthConsumer } from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar light expand="md">
        <NavbarBrand href="/">Applycation</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <AuthConsumer>
              {({ isAuth, logout, who }) =>
                isAuth ? (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {who}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Link to="/test1">Profile</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link onClick={logout} to="/">
                          Logout
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )
              }
            </AuthConsumer>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

// NavbarToggler.propTypes = {
//   type: PropTypes.string,
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// };
