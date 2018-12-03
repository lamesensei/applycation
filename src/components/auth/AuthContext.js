import React, { Component } from 'react';
import Auth from '../functions/auth';
import bcryptjs from 'bcryptjs';
const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      who: localStorage.who,
      id: localStorage.id,
      created: localStorage.created
    };
  }

  login = (user, pass) => {
    return new Promise((resolve, reject) => {
      Auth.retrieve(user).then((data) => {
        console.log(data);
        if (data.user.length > 0) {
          bcryptjs.compare(pass, data.user[0].password).then((res) => {
            console.log(res);
            if (res) {
              this.success(data.user[0].name, data.user[0].id, data.user[0].created);
              resolve(true);
            } else reject(Error('passwordwrong'));
          });
        } else reject(Error('loginfail'));
      });
    });
  };

  success = (who, id, created) => {
    if (who) {
      localStorage.setItem('who', who);
      localStorage.setItem('id', id);
      localStorage.setItem('created', created);
      this.setState({
        who: who,
        id: id,
        created: created
      });
    }
  };

  logout = () => {
    localStorage.removeItem('who');
    localStorage.removeItem('id');
    localStorage.removeItem('created');
    this.setState({
      id: null,
      who: null,
      created: null
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          who: this.state.who,
          id: this.state.id,
          login: this.login,
          logout: this.logout,
          created: this.state.created
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
