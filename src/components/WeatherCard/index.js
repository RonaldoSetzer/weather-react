import React from 'react';

import {
  Container,
  Content,
  IconContainer,
  Button,
  Temperature,
} from './styles';
import { Title } from '../../components/ui';
import { getWeatherIconById } from '../../assets/icons';

function WeatherCard(props) {
  const { label, iconId, backgroundColor, children } = props;
  const { temperature, tempUnit, handleUnit } = props;

  const IconComponent = getWeatherIconById(iconId);

  function handleClick(e) {
    e.preventDefault();
    handleUnit();
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <IconContainer>{IconComponent && <IconComponent />}</IconContainer>
      <Content>
        <Temperature>
          <Title uppercase>{label}</Title>
          <Button onClick={handleClick}>{temperature[tempUnit]}</Button>
        </Temperature>
        {children && children}
      </Content>
    </Container>
  );
}

export default WeatherCard;
