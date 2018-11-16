import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { testQuery } from './models/test';

class MainMenu extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        };
    }
    clickTest = () => {};
    render() {
        return (
            <div>
                <Link to="/">
                    <Button onClick={this.clickTest}>home</Button>
                </Link>
                <Link to="/about">
                    <Button>About</Button>
                </Link>
                <Link to="/code">
                    <Button>code</Button>
                </Link>
                <Link to="/code">
                    <Button>contact</Button>
                </Link>
                <Link to="/info">
                    <Button>info</Button>
                </Link>
            </div>
        );
    }
}

class Home extends Component {
    constructor() {
        super();
        this.state = { data: { test: [] } };
    }
    componentDidMount() {
        testQuery.then((data) => this.setState({ data: data }));
    }
    render() {
        const data = this.state.data.test.map((item) => {
            return <p key={item.id}>{item.name}</p>;
        });
        return <div>{data}</div>;
    }
}

const About = () => <div>About</div>;

const Code = () => <div>Code</div>;

const Contact = () => <div>Contact</div>;

const info = () => <div>info</div>;

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <MainMenu />
                    </header>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/code" component={Code} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/presence" component={info} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
