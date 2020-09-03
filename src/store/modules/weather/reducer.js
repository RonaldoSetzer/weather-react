import { mapWeather } from '../../../helpers/weather';
import Types from './ActionTypes';

const initialState = mapWeather({});

function weather(state = initialState, action) {
  switch (action.type) {
    case Types.WEATHER_UPDATE:
      return { ...action.weather, isEmpty: false };

    case Types.WEATHER_RESET:
      return { ...initialState, isEmpty: true };

    default:
      return state;
  }
}

export default weather;
