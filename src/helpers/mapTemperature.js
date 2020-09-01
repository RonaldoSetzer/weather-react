import { colorlevels } from '../utils/colors';

export function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;

  return fahrenheit.toFixed(1);
}

export function formatCelsiusText(celsius) {
  return celsius ? `${celsius.toFixed(1)} ˚C` : '--';
}

export function formatFahrenheitText(celsius) {
  return celsius ? `${convertToFahrenheit(celsius)} F` : '--';
}

export function handleBackgroundColor(celsius, forecastIndex) {
  if (celsius < 15) {
    return colorlevels.blue[forecastIndex || 0];
  } else if (celsius <= 35) {
    return colorlevels.yellow[forecastIndex || 0];
  } else if (celsius > 35) {
    return colorlevels.red[forecastIndex || 0];
  }

  return colorlevels.gray[forecastIndex || 0];
}

export default function mapTemperature(celsius, forecastIndex) {
  const backgroundColor = handleBackgroundColor(celsius, forecastIndex);

  return {
    celsius: formatCelsiusText(celsius),
    fahrenheit: formatFahrenheitText(celsius),
    backgroundColor,
  };
}
