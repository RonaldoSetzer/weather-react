import { mapTemperature } from '../../../helpers/temperature';
import Types from './ActionTypes';

const initialState = {
  isEmpty: true,
  today: mapTemperature(null, 0),
  tomorrow: mapTemperature(null, 1),
  afterTomorrow: mapTemperature(null, 2),
};

function forecast(state = initialState, action) {
  switch (action.type) {
    case Types.FORECAST_UPDATE:
      return { ...action.forecast, isEmpty: false };

    case Types.FORECAST_RESET:
      return { ...initialState, isEmpty: true };

    default:
      return state;
  }
}

export default forecast;
