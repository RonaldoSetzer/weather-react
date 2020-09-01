import { mapTemperature } from '../../../helpers/temperature';

const initialState = {
  today: mapTemperature(null, 0),
  tomorrow: mapTemperature(null, 1),
  afterTomorrow: mapTemperature(null, 2),
};

function forecast(state = initialState, action) {
  switch (action.type) {
    case '@forecast/UPDATE': {
      return { ...action.forecast };
    }
    default:
      return state;
  }
}

export default forecast;
