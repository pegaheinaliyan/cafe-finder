const initialState = {
  records: {},
  filter:null,
  filteredcafeInfo: {
  "cafe1":{
   id:null,
   name:null,
   piont:null,
   location:{
    latitude:null,
    longitude: null,
    name: ""
   },
  address:null,
   menu:{
     tea: 0,
     coffee:0,
     cake:0
   }
  },
}}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSITIONS':
      return Object.assign({}, state, { records: action.records })
    case 'INPUT_CAFE_ID':
      return inputCafeName(state, action);
    case 'FIND_CAFE_INFO':
      return findCafeInfo(state, action)

    default:
      return state;
  }
}

const inputCafeName = (state, action)=>{
  let newState =  Object.assign({}, state)
  if(action.name === ""){
    newState.filter = null;
    newState.filteredcafeInfo = {
      "cafe1":{
   id:null,
   name:null,
   piont:null,
   location:{
    latitude:null,
    longitude: null,
    name: ""
   }}}
  }
  else
    newState.filter = action.name;
  return newState;
}

const findCafeInfo = (state, action) => {
  let newState = Object.assign({}, state);
  if(state.records[state.filter]){
    const record = state.records[state.filter];
    newState.filteredCafeInfo = {
      id: record.id,
      name: record.name,
      point: record.piont,
      // position: record.position,
      // distance: record.distance,
      // timestamp: record.timestamp
    }
  }
  return newState;
}

export default reducer;