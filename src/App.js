import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/nav/Header';
import Left from './components/nav/Left';
import LoginForm from './components/user/LoginForm';
import ApplicationForm from './components/job/ApplicationForm';
import ShowJob from './components/job/ShowJob';
import { AuthProvider } from './components/auth/AuthContext';
class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="App h-100">
          <Header />
          <div className="container-fluid h-100">
            <div className="row">
              <div className="col-md-2 side">
                <Left />
              </div>
              <div className="col-md-10 main border">
                <Switch>
                  <Route path="/login" render={(props) => <LoginForm {...props} />} />
                  <Route path="/job/apply" component={ApplicationForm} />
                  <Route path="/job/:id" component={ShowJob} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default withRouter(App);
