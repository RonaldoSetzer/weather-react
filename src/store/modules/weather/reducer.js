import mapTemperature from '../../../helpers/mapTemperature';

const initialState = {
  weather: null,
  today: mapTemperature(null, 0),
  tomorrow: mapTemperature(null, 1),
  afterTomorrow: mapTemperature(null, 2),
};
console.log(initialState)

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
