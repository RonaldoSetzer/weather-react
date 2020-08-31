import React from 'react';

import WeatherInfo from './index';

export const component = () => (
  <WeatherInfo
    title="Ensolarado"
    wind="NO 6.4km/h"
    humidity="78%"
    pressure="1003hPA"
  />
);

export default {
  title: 'Components /WeatherInfo',
  component: WeatherInfo,
};
