import { call, put, all, takeLatest } from 'redux-saga/effects';
import { requestWeather, updateWeather } from './actions';

import { getForecast } from '../../../services/openWeatherAPI';

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function extractTemperature({ main: { temp } }) {
  return { celsius: temp, fahrenheit: convertToF(temp) };
}

function* requestForecast({ city }) {
  const payload = yield call(getForecast, city);

  if (payload.data.list) {
    const [today, tomorrow, afterTomorrow] = payload.data.list;
    const {
      weather,
      wind,
      main: { humidity, pressure },
    } = today;

    const weatherInfo = {
      weather: weather[0],
      wind,
      pressure,
      humidity,
    };

    yield put(
      updateWeather({
        today: extractTemperature(today),
        tomorrow: extractTemperature(tomorrow),
        afterTomorrow: extractTemperature(afterTomorrow),
        weather: weatherInfo,
      }),
    );
  }
}

export default all([takeLatest('@forecast/REQUEST', requestForecast)]);
