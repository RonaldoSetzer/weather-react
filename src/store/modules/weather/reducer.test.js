import reducer from './reducer';
import Types from './ActionTypes';

import { mapWeather } from '../../../helpers/weather';
const initialState = mapWeather({});

describe('Weather Actions', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle WEATHER_UPDATE', () => {
    const weather = { a: 1, b: 2 };
    const action = { type: Types.WEATHER_UPDATE, weather };

    expect(reducer({}, action)).toEqual({ ...weather, isEmpty: false });
  });

  it('should handle WEATHER_RESET', () => {
    const action = { type: Types.WEATHER_RESET };

    expect(reducer({}, action)).toEqual({ ...initialState, isEmpty: true });
  });
});
