import React from 'react';

import { Container, Content, IconContainer, Button } from './styles';
import { Title } from '../../components/ui';

function WeatherCard({
  label,
  icon,
  backgroundColor,
  children,
  celsius,
  fahrenheit,
  temperature = 'celsius',
}) {
  const temp = temperature === 'celsius' ? celsius : fahrenheit;
  return (
    <Container backgroundColor={backgroundColor}>
      <IconContainer>{icon}</IconContainer>
      <Content>
        <Title uppercase>{label}</Title>
        <Button>{temp}</Button>
        {children && children}
      </Content>
    </Container>
  );
}

export default WeatherCard;
