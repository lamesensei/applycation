import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/nav/Header';
import Left from './components/nav/Left';
import LoginForm from './components/user/LoginForm';
import ApplicationForm from './components/job/ApplicationForm';
import SignupForm from './components/user/SignupForm';
import JobView from './components/job/JobView';
import JobList from './components/job/JobList';
import { AuthProvider } from './components/auth/AuthContext';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ProfileView from './components/user/ProfileView';

library.add(faSpinner);

class App extends Component {
  render() {
    const navBg = {
      background: 'black'
    };
    return (
      <AuthProvider>
        <div className="App h-100">
          <Header />
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-md-2 p-3 side" style={navBg}>
                <Left />
              </div>
              <div className="col-md-10 p-3 main border">
                <Switch>
                  <Route path="/login" render={(props) => <LoginForm {...props} />} />
                  <Route path="/signup" component={SignupForm} />
                  <Route path="/job/apply" component={ApplicationForm} />
                  <Route path="/job/:id" component={JobView} />
                  <Route path="/jobs" component={JobList} />
                  <Route path="/profile" component={ProfileView} />
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
