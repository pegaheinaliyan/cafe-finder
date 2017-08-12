import { connect } from 'react-redux';
import Map from '../components/Map';


const mapStateToProps = (state) => {
  let markers = [];
  console.log("hi")
  // if(state.filteredcafeInfo.id !== null ){
  //   markers.push({
  //     id: state.filteredcafeInfo.id,
  //     name: state.filteredcafeInfo.name,
  //     point: state.filteredcafeInfo.point,
  //     latitude: state.filteredTruckInfo.filteredcafeInfo.location["latitude"],
  //     longitude: state.filteredcafeInfo.location["longitude"],
  //     address: state.filteredcafeInfo.address,
  //    tea: state.filteredcafeInfo.menu["tea"],
  //    coffee : state.filteredcafeInfo.menu["coffee"],
  //    cake: state.filteredcafeInfo.menu["cake"]


  //   });
  //   return {markers};
  // }
  for (let prop in state.records) {
    markers.push({
      id: state.records[prop].id,
     name: state.records[prop].name,
      point: state.records[prop].point,
      latitude: state.records[prop].location["latitude"],
      longitude: state.records[prop].location["longitude"],
      address: state.records[prop].address,
     tea: state.records[prop].menu["tea"],
     coffee: state.records[prop].menu["coffee"],   
     cake: state.records[prop].menu["cake"]
    });
  } 

  console.log(markers,"markers")
  return { markers };
}

export default connect(mapStateToProps)(Map);

 