import axios from 'axios';

import { mapTemperature } from '../helpers/temperature';
import { mapWeather } from '../helpers/weather';

const OPEN_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_KEY = '7ba73e0eb8efe773ed08bfd0627f07b8';
const OPEN_WEATHER_FORECAST_API = `/forecast`;
const OPEN_WEATHER_WEATHER_API = `/weather`;

export function getForecast(city) {
  const params = `?q=${city}&APPID=${OPEN_WEATHER_KEY}&cnt=3&units=metric`;
  const url = ''.concat(
    OPEN_WEATHER_API_URL,
    OPEN_WEATHER_FORECAST_API,
    params,
  );

  return axios.get(url).then(({ data }) => {
    if (data.list) {
      const [
        today,
        tomorrow,
        afterTomorrow,
      ] = data.list.map(({ main: { temp } }, forecastIndex) =>
        mapTemperature(temp, forecastIndex),
      );

      return { today, tomorrow, afterTomorrow };
    }
  });
}

export function getWeather(city) {
  const params = `?q=${city}&APPID=${OPEN_WEATHER_KEY}`;
  const url = ''.concat(OPEN_WEATHER_API_URL, OPEN_WEATHER_WEATHER_API, params);

  return axios.get(url).then(({ data }) => {
    console.log(data);
    const {
      wind,
      main: { humidity, pressure },
    } = data;
    const restult = mapWeather({ wind, humidity, pressure });
    console.log(restult);
    return restult;
  });
}
