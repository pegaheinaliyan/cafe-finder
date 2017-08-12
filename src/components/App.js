import React, { Component } from 'react';
import { connect } from 'react-redux';
import Data from '../containers/Data';
import CafeInfo from '../containers/CafeInfo';
import Map from '../containers/Map';
import '../App.css';

const fs = require('fs');

class App extends Component {

  componentDidMount() {
    this.props.getalldata();
  }

  render() {
    return (
      <div className="App">
        my app
        <Map id="map" />
        <Data />
        <CafeInfo />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getalldata: () => {
      // let records = JSON.parse(fs.readFileSync("./data/cafe.json",'utf8')) ;
      let records = [{
        "id": 1,
        "name": "cafe1",
        "point": 3,
        "location": {
          "latitude": 32.844151,
          "longitude": -86.591963,
          "name": "hi"
        },
        "address": "Iran,Tehran,Gharb,num32",
        "menu": {
          "tea": 1000,
          "coffee": 1300,
          "cake": 2000
        }
      }];
      dispatch({ type: 'GET_POSITIONS', records });
    }
  }
}

export default connect(null, mapDispatchToProps)(App);

