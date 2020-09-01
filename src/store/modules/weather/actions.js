export function updateWeather(weather) {
  return {
    type: '@weather/UPDATE',
    weather,
  };
}

export function requestForecast(city) {
  return {
    type: '@forecast/REQUEST',
    city,
  };
}
