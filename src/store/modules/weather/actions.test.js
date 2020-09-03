import * as actions from './actions';
import Types from './ActionTypes';

describe('Weather Actions', () => {
  it('should create an action to weather update', () => {
    const weather = { a: 1, b: 2 };
    const expectedAction = {
      type: Types.WEATHER_UPDATE,
      weather,
    };
    expect(actions.updateWeather(weather)).toEqual(expectedAction);
  });

  it('should create an action to weather request', () => {
    const city = 'Rio de Janeiro';
    const expectedAction = {
      type: Types.WEATHER_REQUEST,
      city,
    };
    expect(actions.requestWeather(city)).toEqual(expectedAction);
  });

  it('should create an action to weather reset', () => {
    const expectedAction = { type: Types.WEATHER_RESET };
    expect(actions.resetWeather()).toEqual(expectedAction);
  });
});
