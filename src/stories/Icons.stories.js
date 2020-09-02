import React from 'react';
import styled from 'styled-components';

import {
  Atmosphere,
  ClearDay,
  ClearNight,
  CloudDay,
  CloudNight,
  Clouds,
  Cloudly,
  Compass,
  Drizzle,
  Loading,
  Rain,
  Snow,
  Thunderstorm,
  WeatherIcons,
  getWeatherIconById,
} from '../assets/icons';

export default {
  title: 'Design System/Icons',
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    width: 200px;
    height: 200px;
    border: 1px solid #fff;
    border-radius: 15px;
    margin: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    padding: 1rem;
  }
`;

export const weatherIds = () => {
  return (
    <List>
      {Object.keys(WeatherIcons).map(key => {
        const Item = WeatherIcons[key];
        return (
          <li key={key}>
            <Item />
            <span>{key}</span>
          </li>
        );
      })}
    </List>
  );
};

export const GetWeatherIconById = () => {
  const Icon = getWeatherIconById('11d');
  return <Icon />;
};

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
