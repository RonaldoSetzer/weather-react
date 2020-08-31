import React from 'react';
import styled from 'styled-components';

import { colorlevels, palette } from '../utils/colors';

const Container = styled.div`
  span {
    width: 5rem;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
  }
`;

const List = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
`;

const ColorBox = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${props => props.color};
`;

export const Palette = () => (
  <Container>
    <ul>
      {Object.keys(palette).map(key => (
        <li>
          <span>{key}</span>
          <ColorBox color={palette[key]} />
        </li>
      ))}
    </ul>
  </Container>
);

export const WeatherLevels = () => (
  <Container>
    <List>
      <span>gray</span>
      {colorlevels.gray.map(color => (
        <ColorBox color={color} />
      ))}
    </List>
    <List>
      <span>Blue</span>
      {colorlevels.blue.map(color => (
        <ColorBox color={color} />
      ))}
    </List>
    <List>
      <span>yellow</span>
      {colorlevels.yellow.map(color => (
        <ColorBox color={color} />
      ))}
    </List>
    <List>
      <span>red</span>
      {colorlevels.red.map(color => (
        <ColorBox color={color} />
      ))}
    </List>
  </Container>
);

export default {
  title: 'Design System/Colors',
};
