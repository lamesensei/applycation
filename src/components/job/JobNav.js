import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class JobNav extends React.Component {
  render() {
    let toRender = null;
    if (this.props.currentTab === 'stages') {
      toRender = (
        <Nav tabs>
          <NavItem name="stages" onClick={this.props.changeTab} value="stages">
            <NavLink active>
              <strong>Stages</strong>
            </NavLink>
          </NavItem>
          <NavItem name="poc" onClick={this.props.changeTab}>
            <NavLink>POC</NavLink>
          </NavItem>
          <NavItem name="others" onClick={this.props.changeTab}>
            <NavLink>Others</NavLink>
          </NavItem>
        </Nav>
      );
    } else if (this.props.currentTab === 'poc') {
      toRender = (
        <Nav tabs>
          <NavItem name="stages" onClick={this.props.changeTab} value="stages">
            <NavLink>Stages</NavLink>
          </NavItem>
          <NavItem name="poc" onClick={this.props.changeTab}>
            <NavLink active>
              <strong>POC</strong>
            </NavLink>
          </NavItem>
          <NavItem name="others" onClick={this.props.changeTab}>
            <NavLink>Others</NavLink>
          </NavItem>
        </Nav>
      );
    } else if (this.props.currentTab === 'others') {
      toRender = (
        <Nav tabs>
          <NavItem name="stages" onClick={this.props.changeTab} value="stages">
            <NavLink>Stages</NavLink>
          </NavItem>
          <NavItem name="poc" onClick={this.props.changeTab}>
            <NavLink>POC</NavLink>
          </NavItem>
          <NavItem name="others" onClick={this.props.changeTab}>
            <NavLink active>
              <strong>Others</strong>
            </NavLink>
          </NavItem>
        </Nav>
      );
    }
    return <div>{toRender}</div>;
  }
}

export default JobNav;
