const initialState = {
  weather: null,
  today: null,
  tomorrow: null,
  afterTomorrow: null,
};

function weather(state = initialState, action) {
  switch (action.type) {
    case '@weather/UPDATE': {
      return { ...action.weather };
    }
    default:
      return state;
  }
}

export default weather;
