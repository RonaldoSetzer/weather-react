import React from 'react';

import { Title, List } from '../../components/ui';
import { Container } from './styles';

function WeatherInfo({ title, wind, humidity, pressure }) {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        <li>Wing: {wind}</li>
        <li>Humidity: {humidity}</li>
        <li>Pressure: {pressure}</li>
      </List>
    </Container>
  );
}

export default WeatherInfo;
