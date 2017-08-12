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
      tea: null,
      coffee: null,
      cake: null
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
    newState.filteredcafeInfo = {
      id: record.id,
      name: record.name,
      point: record.point,
      location: {
        latitude: record.location.latitude,
        longitude: record.location.longitude,
      },
      address: record.address,
      menu: {
        tea: record.menu.tea,
        coffee: record.menu.coffee,
        cake: record.menu.cake
      }
    }
  }
  console.log("newState", newState)
  return newState;
}

export default reducer;