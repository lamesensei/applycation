import React, { Component } from 'react';
import Auth from '../../functions/auth';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      isAuth: localStorage.isAuth || 'false',
      who: localStorage.who || ''
    };
  }

  login = (user, pass) => {
    new Promise((resolve) => resolve(Auth.authenticate(user, pass, this.success)));
  };

  success = (status, who) => {
    localStorage.setItem('isAuth', status);
    localStorage.setItem('who', who);
    this.setState({
      isAuth: status,
      who: who
    });
  };

  logout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('who');
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
          isAuth: this.state.isAuth,
          who: this.state.who,
          verify: this.verify,
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

// const AuthHOC = (Component) => {
//   return (props) => {
//     return (
//       <AuthContext.Consumers>
//         {(context) => {
//           return <Component {...props} context={context} />;
//         }}
//       </AuthContext.Consumers>
//     );
//   };
// };

export { AuthProvider, AuthConsumer };
