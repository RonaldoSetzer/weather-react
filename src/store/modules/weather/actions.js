export function updateWeather(weather) {
  return {
    type: '@weather/UPDATE',
    weather,
  };
}

export function requestWeather(city) {
  return {
    type: '@weather/REQUEST',
    city,
  };
}

export function resetWeather() {
  return { type: '@weather/RESET' };
}
