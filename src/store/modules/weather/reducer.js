const initialState = {};

function weather(state = initialState, action) {
  switch (action.type) {
    case '@weather/UPDATE':
      return state;
    default:
      return state;
  }
}

export default weather;
