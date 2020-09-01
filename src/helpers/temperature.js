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

export function getBgColorByTemperature(celsius, forecastIndex = 3) {
  const index = Math.min(forecastIndex, 3);

  if (!celsius) {
    return colorlevels.gray[index];
  } else if (celsius > 35) {
    return colorlevels.red[index];
  } else if (celsius > 15) {
    return colorlevels.yellow[index];
  } else if (celsius >= 0) {
    return colorlevels.blue[index];
  }
}

export function mapTemperature(celsius, forecastIndex) {
  const backgroundColor = getBgColorByTemperature(celsius, forecastIndex);

  return {
    temperature: {
      celsius: formatCelsiusText(celsius),
      fahrenheit: formatFahrenheitText(celsius),
    },
    backgroundColor,
  };
}
