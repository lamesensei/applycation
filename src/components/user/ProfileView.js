import React, { Component } from 'react';
import User from '../functions/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class ProfileView extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      retrieved: false
    };
  }

  populateProfile = (data) => {
    const { first_name: firstName, last_name: lastName, email, tel } = data;
    this.setState({
      firstName,
      lastName,
      email,
      tel,
      retrieved: !this.state.retrieved
    });
  };

  componentDidMount = () => {
    localStorage.id
      ? User.find(localStorage.id, this.populateProfile)
      : this.props.history.push('/login');
  };
  render() {
    return (
      <React.Fragment>
        {this.state.retrieved ? (
          <div className="p-5">
            <h1>
              {this.state.firstName} <small>{this.state.lastName}</small>
            </h1>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>Email</ListGroupItemHeading>
                <ListGroupItemText>{this.state.email}</ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Telephone</ListGroupItemHeading>
                <ListGroupItemText>{this.state.tel}</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </div>
        ) : (
          <div className="p-5">
            <h1>
              <FontAwesomeIcon icon="spinner" spin />
            </h1>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ProfileView;
