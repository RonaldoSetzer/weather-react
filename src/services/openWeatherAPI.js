import axios from 'axios';

const OPEN_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_KEY = '7ba73e0eb8efe773ed08bfd0627f07b8';
const OPEN_WEATHER_API = `/forecast`;

function extracWeather({ weather, wind, main: { humidity, pressure } }) {
  return { weather: weather[0], wind, humidity, pressure };
}

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

export function getForecast(city) {
  const params = `?q=${city}&APPID=${OPEN_WEATHER_KEY}&cnt=3&units=metric`;
  const url = ''.concat(OPEN_WEATHER_API_URL, OPEN_WEATHER_API, params);

  return axios.get(url).then(({ data }) => {
    if (data.list) {
      const weather = extracWeather(data.list[0]);
      const [today, tomorrow, afterTomorrow] = data.list.map(
        ({ main: { temp } }) => ({
          celsius: temp,
          fahrenheit: convertToF(temp),
        }),
      );
      return { weather, today, tomorrow, afterTomorrow };
    }
  });
}
