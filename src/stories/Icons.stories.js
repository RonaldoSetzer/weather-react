import React from 'react';
import styled from 'styled-components';

import {
  ClearDay,
  ClearNight,
  Clouds,
  Compass,
  Drizzle,
  Loading,
  Rain,
  Snow,
  Thunderstorm,
} from '../assets/icons';

export default {
  title: 'Design System/Icons',
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    width: 400px;
    height: 400px;
    border: 1px solid #fff;
    border-radius: 15px;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const weather = () => (
  <List>
    <li>
      <ClearDay />
    </li>
    <li>
      <ClearNight />
    </li>
    <li>
      <Clouds />
    </li>
    <li>
      <Drizzle />
    </li>
    <li>
      <Rain />
    </li>
    <li>
      <Snow />
    </li>
    <li>
      <Thunderstorm />
    </li>
  </List>
);

export const misc = () => (
  <List>
    <li>
      <Compass />
    </li>
    <li>
      <Loading />
    </li>
  </List>
);
