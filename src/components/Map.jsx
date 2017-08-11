import React, { Component } from 'react';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from 'prop-types';


const MyMap = withGoogleMap(props => {

  return (
    <GoogleMap
      defaultZoom = {4}
      defaultCenter = {{ lat: 40.0412204, lng: -100.9387545 }}
    >
      {/* {props.markers.map((marker, idx) => (
      <Marker key = {idx}
        position = {{lat : marker.latitude, lng: marker.longitude }}
      />
      ))} */}
    </GoogleMap >
  )}
);

class Map extends Component {
  render() {
    return (
      <div>
      <MyMap
        containerElement={
           <div style={{ height: `1000px` }} />
        }
        mapElement={
          <div style={{ height: `1000px` }} />
        }
       // markers={this.props.markers}
      ></MyMap>
      </div>)
  }
}

// Map.propTypes = {
//   markers: PropTypes.array.isRequired
// };

export default Map;
