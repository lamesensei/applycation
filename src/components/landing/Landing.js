import React, { Component } from 'react';
import landing from '../../media/landing.jpg';

class Landing extends Component {
  componentDidMount = () => {
    if (localStorage.id) this.props.history.push('/jobs');
  };

  render() {
    const style = {
      backgroundImage: `url(${landing})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    return (
      <div className="h-100 d-flex justify-content-center align-items-center" style={style}>
        <h1 className="white-text">YO</h1>
      </div>
    );
  }
}

export default Landing;
