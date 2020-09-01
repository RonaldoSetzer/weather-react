import React from 'react';
import styled from 'styled-components';

import WeatherCard from './index';
import WeatherInfo from '../WeatherInfo';
import { ClearDay } from '../../assets/icons';
import { colorlevels } from '../../utils/colors';

const [normal, lighten] = colorlevels.yellow;

const Container = styled.div`
  max-width: 800px;
`;

const temperature = {
  celsius: '25 C',
  fahrenheit: '59 F',
};

export const component = () => (
  <WeatherCard
    label="Tomorrow"
    tempUnit="celsius"
    temperature={temperature}
    backgroundColor={lighten}
  />
);

export const withChildren = () => (
  <Container>
    <WeatherCard
      label="Today"
      icon={<ClearDay />}
      tempUnit="fahrenheit"
      temperature={temperature}
      backgroundColor={normal}
    >
      <WeatherInfo
        description="Sunny"
        wind="NO 6.4km/h"
        humidity="78%"
        pressure="1003hPA"
      />
    </WeatherCard>
  </Container>
);

export default {
  title: 'Components/WeatherCard',
  component: WeatherCard,
};
