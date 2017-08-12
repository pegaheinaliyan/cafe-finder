const initialState = {
  records: {},
  filter: null,
  filteredcafeInfo: {
    id: null,
    name: null,
    piont: null,
    location: {
      latitude: null,
      longitude: null,
      name: ""
    },
    address: null,
    menu: {
      tea: 0,
      coffee: 0,
      cake: 0
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSITIONS':
      return Object.assign({}, state, { records: action.records })
    case 'INPUT_CAFE_NAME':
      return inputCafeName(state, action);
    case 'FIND_CAFE_INFO':
      return findCafeInfo(state, action)

    default:
      return state;
  }
}

const inputCafeName = (state, action) => {
  let newState = Object.assign({}, state)
  if (action.name === "") {
    newState.filter = null;
    newState.filteredcafeInfo = {
      id: null,
      name: null,
      piont: null,
      location: {
        latitude: null,
        longitude: null,
        name: ""
      }
    };
  }
  else
    newState.filter = action.name;
  return newState;
}

const findCafeInfo = (state, action) => {
  let newState = Object.assign({}, state);
  console.log(state, "state")
  if (state.filter) {
    const record = state.records[0];
    console.log("record", record)

    console.log(record.point,"point");
    newState.filteredcafeInfo = {
      id: record.id,
      name: record.name,
      point: record.point,
      location: {
        latitude: record.location.latitude,
        longitude: null,
        name: ""
      },
      address:record.address,
       menu: {
      tea: record.tea,
      coffee: record.coffee,
      cake: record.cake
    }
    }
  }
  console.log("newState",newState)
  return newState;
}

export default reducer;