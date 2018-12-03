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
      // fontFamily: ['Changa', 'sans-serif'],
      // fontWeight: 700
    };

    return (
      <div
        className="h-100 d-flex flex-column justify-content-center align-items-center"
        style={background}
      >
        <h1 className="display-1 text-white" style={fancy}>
          APPLYCATION
        </h1>
        <h2 className="text-white" style={fancy}>
          Your job offers, applications and tasks all in one location.
        </h2>
      </div>
    );
  }
}

export default Landing;
