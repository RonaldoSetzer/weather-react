import React from 'react';

import { Container, Content, IconContainer, Button } from './styles';
import { Title } from '../../components/ui';

function WeatherCard({ label, icon, temperature, backgroundColor, children }) {
  return (
    <Container backgroundColor={backgroundColor}>
      <IconContainer>{icon}</IconContainer>
      <Content>
        <Title uppercase>{label}</Title>
        <Button>{temperature}</Button>
        {children && children}
      </Content>
    </Container>
  );
}

export default WeatherCard;
