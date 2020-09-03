import reducer from './reducer';
import Types from './ActionTypes';

import { mapTemperature } from '../../../helpers/temperature';

const initialState = {
  isEmpty: true,
  today: mapTemperature(null, 0),
  tomorrow: mapTemperature(null, 1),
  afterTomorrow: mapTemperature(null, 2),
};


describe('Forecast Actions', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FORECAST_UPDATE', () => {
    const forecast = { a: 1, b: 2 };
    const action = { type: Types.FORECAST_UPDATE, forecast };

    expect(reducer({}, action)).toEqual({ ...forecast, isEmpty: false });
  });

  it('should handle FORECAST_RESET', () => {
    const action = { type: Types.FORECAST_RESET };

    expect(reducer({}, action)).toEqual({ ...initialState, isEmpty: true });
  });
});

