import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import SearchBox from '../../components/SearchBox';
import WeatherCard from '../../components/WeatherCard';
import WeatherInfo from '../../components/WeatherInfo';

import { Title, List } from '../../components/ui';
import { Container, Background } from './styles';
import { getBgColorByTemperature } from '../../helpers/temperature';

import useSearch from '../../hooks/useSearch';
import useTemperatureUnit from '../../hooks/useTemperatureUnit';
import useGeolocation from '../../hooks/useGeolocation';

function Forecast() {
  const weather = useSelector(state => state.weather);
  const forecast = useSelector(state => state.forecast);
  const { unit, toggleUnit } = useTemperatureUnit();
  const { address } = useGeolocation();
  const { search } = useSearch(address);

  const background = getBgColorByTemperature();

  return (
    <Background background={background}>
      <Container>
        <SearchBox userAddress={address} handleSearch={search} />
        <WeatherCard
          label="Today"
          iconId={weather.iconId}
          tempUnit={unit}
          handleUnit={toggleUnit}
          {...forecast.today}
        >
          <WeatherInfo {...weather} />
        </WeatherCard>
        <WeatherCard
          label="Tomorrow"
          tempUnit={unit}
          handleUnit={toggleUnit}
          {...forecast.tomorrow}
        />
        <WeatherCard
          label="After Tomorrow"
          tempUnit={unit}
          handleUnit={toggleUnit}
          {...forecast.afterTomorrow}
        />
      </Container>
    </Background>
  );
}

export default Forecast;
