import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Left from './components/layout/Left';
import Test1 from './components/test/test1';
import Test2 from './components/test/test2';
import LoginForm from './components/user/LoginForm';

import './App.css';

// import { testQuery } from './models/test';
class App extends Component {
  constructor() {
    super();
    this.state = {
      who: localStorage.getItem('who')
    };
  }
  setLogin = (status, who) => {
    localStorage.setItem('loggedIn', status);
    localStorage.setItem('who', who);
    this.setState({ who: who });
  };

  logoutHandler = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('who');
    this.setState({ who: '' });
  };

  render() {
    return (
      <Router>
        <div className="App h-100">
          <Header who={this.state.who} />
          <div className="container-fluid h-100">
            <div className="row">
              <div className="col-md-3 col-sm-1 side">
                <Left logout={this.logoutHandler} />
              </div>
              <div className="col-md-9 col-sm-11 main">
                <Switch>
                  <Route
                    path="/login"
                    render={(props) => <LoginForm {...props} setLogin={this.setLogin} />}
                  />
                  <Route path="/test1" component={Test1} />
                  <Route path="/test2" component={Test2} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
