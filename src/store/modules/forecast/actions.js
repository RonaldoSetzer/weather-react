export function updateForecast(forecast) {
  return {
    type: '@forecast/UPDATE',
    forecast,
  };
}

export function requestForecast(city) {
  return {
    type: '@forecast/REQUEST',
    city,
  };
}
