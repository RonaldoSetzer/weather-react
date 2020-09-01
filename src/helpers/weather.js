export function formatWind({ speed, deg }) {
  return speed ? `${speed}m/s` : '--';
}

export function formatPressure(value) {
  return value ? `${value}hPA` : '--';
}

export function formatHumidty(value) {
  return value ? `${value}%` : '--';
}

export function mapWeather({
  pressure,
  humidity,
  wind = { speed: undefined, deg: undefined },
}) {
  return {
    wind: formatWind(wind),
    pressure: formatPressure(pressure),
    humidity: formatHumidty(humidity),
  };
}
