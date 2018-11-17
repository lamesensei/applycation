import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/nav/Header';
import Left from './components/nav/Left';
import Test1 from './components/test/test1';
import Test2 from './components/test/test2';
import LoginForm from './components/user/LoginForm';
import { AuthProvider } from './components/auth/AuthContext';
class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="App h-100">
            <Header />
            <div className="container-fluid h-100">
              <div className="row">
                <div className="col-md-3 col-sm-1 side">
                  <Left />
                </div>
                <div className="col-md-9 col-sm-11 main">
                  <Switch>
                    <Route path="/login" render={(props) => <LoginForm {...props} />} />
                    <Route path="/test1" component={Test1} />
                    <Route path="/test2" component={Test2} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </AuthProvider>
      </Router>
    );
  }
}

export default withRouter(App);
