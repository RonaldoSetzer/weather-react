const compass = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
// const compass = ['N', 'E', 'S', 'W', 'N'];

export function convertMsToKmH(value) {
  return Number(parseFloat(value) * 18.5).toFixed(1);
}

export function formatWindDirection(deg) {
  const sliceSize = 360 / (compass.length - 1);
  const mod = deg % 360;

  let index = Math.round(mod / sliceSize);
  return compass[index];
}

export function formatWind({ speed, deg }) {
  if (speed) {
    const direction = formatWindDirection(deg);
    const velocity = convertMsToKmH(speed);
    return `${direction} ${velocity}Km/h`;
  }
  return '--';
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
