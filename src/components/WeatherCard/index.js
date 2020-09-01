import React from 'react';

import { Container, Content, IconContainer, Button } from './styles';
import { Title } from '../../components/ui';

function WeatherCard(props) {
  const { label, icon, backgroundColor, children } = props;
  const { celsius, fahrenheit, tempUnit, handleUnit } = props;

  function handleClick(e) {
    e.preventDefault();
    handleUnit();
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <IconContainer>{icon}</IconContainer>
      <Content>
        <Title uppercase>{label}</Title>
        <Button onClick={handleClick}>
          {tempUnit === 'celsius' ? celsius : fahrenheit}
        </Button>
        {children && children}
      </Content>
    </Container>
  );
}

export default WeatherCard;
