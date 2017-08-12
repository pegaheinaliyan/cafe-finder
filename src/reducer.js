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

const emptyObj = {
        id: null,
        name: null,
        piont: null,
        location: {
          latitude: null,
          longitude: null,
        },
        menu: {
          tea: 0,
          coffee: 0,
          cake: 0
        }
      };

const inputCafeName = (state, action) => {
  let newState = Object.assign({}, state)
  console.log(state, "state in input")
  console.log(action, "action in input")

  for (let i = 0; i < state.records.length; i++) {
    const currentRecord = state.records[i];
    //console.log("len", state.records.length)
    if (action.name === "") {
      newState.filter = null;
      newState.filteredcafeInfo = emptyObj;
    } else if (currentRecord.name === action.name) {
      console.log(action.name, "action.name")
      newState.filter = action.name;
      return newState;
    }
  }
  return newState;
}

const findCafeInfo = (state, action) => {
    let newState = Object.assign({}, state)
  for (let i = 0; i < state.records.length; i++) {
  
    if (state.filter === state.records[i].name) {
      const record = state.records[i];
      console.log(state.records[i], "state.records[i]")
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
       return newState;
    }
 
  }
   return newState;
}

export default reducer;