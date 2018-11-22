import React, { Component } from 'react';
import { AuthConsumer } from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavbarToggler,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fa
} from 'mdbreact';

import User from '../functions/user';
import moment from 'moment';

import galogo from '../../media/galogo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      jobless: 0,
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  setJobless = (data) => {
    const jobless = moment().diff(moment(data.created, moment.ISO_8601), 'days');
    this.setState({ jobless: this.state.jobless + jobless });
  };

  componentDidMount = () => {
    if (localStorage.id) User.find(localStorage.id, this.setJobless);
  };

  render() {
    const navBg = {
      // background: 'black'
    };
    const brandStyle = {
      fontFamily: ['Changa', 'sans-serif'],
      fontWeight: 700
    };
    return (
      <Navbar color="black" dark style={navBg} expand="md" scrolling fixed="top">
        <NavbarBrand style={brandStyle} href="/">
          <img src={galogo} width="30" height="30" alt="logo" /> GENERAL APPLYCATION
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav right>
            <NavItem>
              <AuthConsumer>
                {({ logout, who }) =>
                  who ? (
                    <Dropdown>
                      <DropdownToggle nav caret>
                        <Fa icon="user" /> {who}
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-default" right>
                        <DropdownItem>
                          Jobless for{' '}
                          <u>
                            <strong>{this.state.jobless}</strong>
                          </u>{' '}
                          days
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <Link onClick={logout} to="/">
                            Logout
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  )
                }
              </AuthConsumer>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}
