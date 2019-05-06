import React, { Component } from 'react';
import Main from './components/main'
import './weather.css';

class Weather extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default Weather;
