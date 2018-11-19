import React, { Component } from 'react';
import Auth from '../functions/auth';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      who: localStorage.who,
      id: localStorage.id
    };
  }

  login = (user, pass) => {
    new Promise((resolve) => resolve(Auth.authenticate(user, pass, this.success)));
  };

  success = (status, who, id) => {
    localStorage.setItem('who', who);
    localStorage.setItem('id', id);
    this.setState({
      isAuth: status,
      who: who,
      id: id
    });
  };

  logout = () => {
    localStorage.removeItem('who');
    localStorage.removeItem('id');
    this.setState({
      isAuth: null,
      who: null
    });
  };

  render() {
    console.log(this.state);
    return (
      <AuthContext.Provider
        value={{
          who: this.state.who,
          id: this.state.id,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
