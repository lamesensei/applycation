import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import Header from './components/nav/Header';
import Left from './components/nav/Left';
import LoginForm from './components/user/LoginForm';
import ApplicationForm from './components/job/ApplicationForm';
import SignupForm from './components/user/SignupForm';
import JobView from './components/job/JobView';
import JobList from './components/job/JobList';
import ProfileView from './components/user/ProfileView';
import Landing from './components/landing/Landing';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

class App extends Component {
  render() {
    const left = {
      background: '#212121',
      height: '100%'
    };

    const main = {
      overflow: 'scroll'
    };

    const row = {
      paddingTop: '57px'
    };
    return (
      <AuthProvider>
        <div className="App h-100">
          <Header />
          <MDBContainer fluid className="h-100 p-0">
            <MDBRow className="h-100 no-gutters" style={row}>
              <MDBCol md="2" className="side" style={left}>
                <Left />
              </MDBCol>
              <MDBCol md="10" className="main" style={main}>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/login" render={(props) => <LoginForm {...props} />} />
                  <Route path="/signup" component={SignupForm} />
                  <Route path="/job/apply" component={ApplicationForm} />
                  <Route path="/job/:id" component={JobView} />
                  <Route path="/jobs" component={JobList} />
                  <Route path="/profile" component={ProfileView} />
                </Switch>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </AuthProvider>
    );
  }
}

export default withRouter(App);
