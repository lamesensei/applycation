import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import Left from './components/layout/Left';
import Test1 from './components/test/test1';
import Test2 from './components/test/test2';

import './App.css';

// import { testQuery } from './models/test';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App h-100">
          <Header />
          <div className="container-fluid h-100">
            <div className="row">
              <div className="col-md-3 col-sm-1 side">
                <Left />
              </div>
              <div className="col-md-9 col-sm-11 main">
                <Route path="/test1" component={Test1} />
                <Route path="/test2" component={Test2} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
