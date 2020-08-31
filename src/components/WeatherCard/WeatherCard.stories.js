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

export const component = () => (
  <WeatherCard label="Amanha" temperature="25 C" backgroundColor={lighten} />
);

export const withChildren = () => (
  <Container>
    <WeatherCard
      label="Hoje"
      icon={<ClearDay />}
      temperature="32 C"
      backgroundColor={normal}
    >
      <WeatherInfo
        title="Ensolarado"
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
