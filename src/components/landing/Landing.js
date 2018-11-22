import React, { Component } from 'react';
import landing from '../../media/landing.jpg';

class Landing extends Component {
  componentDidMount = () => {
    if (localStorage.id) this.props.history.push('/jobs');
  };

  render() {
    const background = {
      backgroundImage: `url(${landing})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    const fancy = {
      background: 'black'
    };

    return (
      <div
        className="h-100 d-flex flex-column justify-content-center align-items-center"
        style={background}
      >
        <h1 className="white-text d-block">
          <span style={fancy}>insert fancy title</span>
        </h1>
        <h1 className="white-text d-block">
          <span style={fancy}>insert fancy subtitle</span>
        </h1>
        <h1 className="white-text d-block">
          <span style={fancy}>insert tagline</span>
        </h1>
        <h1 className="white-text d-block">
          <span style={fancy}>insert link</span>
        </h1>
        <h1 className="white-text d-block">
          <span style={fancy}>insert</span>
        </h1>
      </div>
    );
  }
}

export default Landing;
