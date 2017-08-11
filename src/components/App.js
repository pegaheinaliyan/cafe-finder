import React, { Component } from 'react';
import Map from './Map';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        my app
        <Map id="map" />
      </div>
    );
  }
}

export default App;
