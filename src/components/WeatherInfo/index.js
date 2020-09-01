import React from 'react';

import { Title, List } from '../../components/ui';
import { Container } from './styles';

function WeatherInfo({ description, wind, humidity, pressure }) {
  return (
    <Container>
      <Title capitalize>{description}</Title>
      <List>
        <li>Wind: {wind}</li>
        <li>Humidity: {humidity}</li>
        <li>Pressure: {pressure}</li>
      </List>
    </Container>
  );
}

export default WeatherInfo;
