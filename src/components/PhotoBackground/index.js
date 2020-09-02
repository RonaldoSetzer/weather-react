import React from 'react';

import useBingBackground from '../../hooks/useBingBackground';

import { Container } from './styles';

function PhotoBackground({ children }) {
  const { url } = useBingBackground();

  return <Container background={url}>{children}</Container>;
}

export default PhotoBackground;
