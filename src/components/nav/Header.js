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

import galogo from '../../media/galogo.png';

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
    const navBg = {
      background: 'black'
    };
    const brandStyle = {
      fontFamily: ['Changa', 'sans-serif'],
      fontWeight: 700
    };
    return (
      <Navbar fixed="top" dark style={navBg} expand="md">
        <NavbarBrand style={brandStyle} href="/">
          <img src={galogo} width="30" height="30" alt="logo" /> GENERAL APPLYCATION
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <AuthConsumer>
              {({ logout, who }) =>
                who ? (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {who}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Link to="/profile">Profile</Link>
                      </DropdownItem>
                      <DropdownItem divider />
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
