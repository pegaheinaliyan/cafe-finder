import React from 'react';

const CafeInfo = (props) => {
  return (
    <div id="cafe-info">
      <input id="input-cafe-name" type="text" onChange={(event) => props.inputCafeName(event.target.value)} />
      <button id="find-cafe-button" onClick={props.findCafeInfo}>find cafe info</button>
      <div className="filteredcafeInfo" key={props.filteredcafeInfo.id}>

        <p>ID: {props.filteredcafeInfo.id}</p>
        <p>Name: {props.filteredcafeInfo.name}</p>
        <p>Point: {props.filteredcafeInfo.point}</p>
        <p>LOCATION :</p>
        <p>latitude: {props.filteredcafeInfo.location["latitude"]}</p>
        <p>longitude: {props.filteredcafeInfo.location["longitude"]}</p>
        <p>Address: {props.filteredcafeInfo.address}</p>
        <p>MENU:</p>
        <p>tea: {props.filteredcafeInfo.menu["tea"]}</p>
        <p>coffee: {props.filteredcafeInfo.menu["coffee"]}</p>
        <p>cake: {props.filteredcafeInfo.menu["cake"]}</p>

      </div>
    </div>
  );
}

export default CafeInfo;
