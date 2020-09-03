import * as actions from './actions';
import Types from './ActionTypes';

describe('Forecast Actions', () => {
  it('should create an action to forecast update', () => {
    const forecast = { a: 1, b: 2 };
    const expectedAction = { type: Types.FORECAST_UPDATE, forecast };

    expect(actions.updateForecast(forecast)).toEqual(expectedAction);
  });

  it('should create an action to forecast request', () => {
    const city = 'Rio de Janeiro';
    const expectedAction = { type: Types.FORECAST_REQUEST, city };

    expect(actions.requestForecast(city)).toEqual(expectedAction);
  });

  it('should create an action to forecast reset', () => {
    const expectedAction = { type: Types.FORECAST_RESET };

    expect(actions.resetForecast()).toEqual(expectedAction);
  });
});
