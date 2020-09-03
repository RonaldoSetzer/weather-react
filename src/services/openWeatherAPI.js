import axios from 'axios';

import { mapTemperature } from '../helpers/temperature';
import { mapWeather } from '../helpers/weather';
import { createUrl } from '../utils/client';

const {
  OPEN_WEATHER_KEY,
  OPEN_WEATHER_API_FORECAST,
  OPEN_WEATHER_API_WEATHER,
} = process.env;

export function getForecast(city) {
  const params = {
    q: city,
    APPID: OPEN_WEATHER_KEY,
    cnt: 3,
    units: 'metric',
  };
  const url = createUrl(OPEN_WEATHER_API_FORECAST, params);

  return axios
    .get(url)
    .then(({ data }) => {
      if (data?.list) {
        const [
          today,
          tomorrow,
          afterTomorrow,
        ] = data.list.map(({ main: { temp } }, forecastIndex) =>
          mapTemperature(temp, forecastIndex),
        );

        return { today, tomorrow, afterTomorrow };
      }
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

export function getWeather(city) {
  const params = {
    q: city,
    APPID: OPEN_WEATHER_KEY,
  };
  const url = createUrl(OPEN_WEATHER_API_WEATHER, params);

  return axios
    .get(url)
    .then(({ data }) => {
      const {
        weather,
        wind,
        main: { humidity, pressure },
      } = data;

      const { description, icon, id } = weather[0];

      const result = mapWeather({
        icon,
        id,
        description,
        wind,
        humidity,
        pressure,
      });
      return result;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}
