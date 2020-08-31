import React from 'react';

import { Container } from './styles';
import { Compass } from '../../assets/icons';

function SearchBox() {
  return (
    <Container>
      <Compass />
      <input placeholder="Type a city" />
    </Container>
  );
}

export default SearchBox;
