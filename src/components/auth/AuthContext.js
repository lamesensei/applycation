import React, { Component } from 'react';
import Auth from '../functions/auth';
import bcryptjs from 'bcryptjs';
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
    return new Promise((resolve, reject) => {
      Auth.authenticate(user, pass).then((data) => {
        console.log(data);
        if (data.user.length > 0) {
          bcryptjs.compare(pass, data.user[0].password).then((res) => {
            console.log(res);
            if (res) {
              this.success(data.user[0].name, data.user[0].id);
              resolve(true);
            } else reject(Error('passwordwrong'));
          });
        } else reject(Error('loginfail'));
      });
    });
  };

  success = (who, id) => {
    if (who) {
      localStorage.setItem('who', who);
      localStorage.setItem('id', id);
      this.setState({
        who: who,
        id: id
      });
    }
  };

  logout = () => {
    localStorage.removeItem('who');
    localStorage.removeItem('id');
    this.setState({
      id: null,
      who: null
    });
  };

  render() {
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
