import axios from 'axios';

const OPEN_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_KEY = '7ba73e0eb8efe773ed08bfd0627f07b8';
const OPEN_WEATHER_API = `/forecast`;

export function getForecast(city) {
  const params = `?q=${city}&APPID=${OPEN_WEATHER_KEY}&cnt=3&units=metric`;
  const url = ''.concat(OPEN_WEATHER_API_URL, OPEN_WEATHER_API, params);

  return axios.get(url).then(data => {
    return data;
  });
}
