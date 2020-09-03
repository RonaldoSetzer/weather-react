import { mapWeather } from '../../../helpers/weather';

const initialState = mapWeather({});

function weather(state = initialState, action) {
  switch (action.type) {
    case '@weather/UPDATE':
      return { ...action.weather };

    case '@weather/RESET':
      return { ...initialState };

    default:
      return state;
  }
}

export default weather;
