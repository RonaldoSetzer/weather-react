import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchBox from '../../components/SearchBox';
import WeatherCard from '../../components/WeatherCard';
import WeatherInfo from '../../components/WeatherInfo';

import { Title, List } from '../../components/ui';
import { Container, Background } from './styles';
import { getBgColorByTemperature } from '../../helpers/temperature';

import useSearch from '../../hooks/useSearch';

function Forecast() {
  const [tempUnit, setTempUnit] = useState('celsius');
  const weather = useSelector(state => state.weather);
  const forecast = useSelector(state => state.forecast);
  const { search } = useSearch();

  const background = getBgColorByTemperature();

  function toggleTempUnit() {
    const unit = tempUnit === 'celsius' ? 'fahrenheit' : 'celsius';
    setTempUnit(unit);
  }

  return (
    <Background background={background}>
      <Container>
        <SearchBox handleSearch={search} />
        <WeatherCard
          label="Today"
          iconId={weather.iconId}
          tempUnit={tempUnit}
          handleUnit={toggleTempUnit}
          {...forecast.today}
        >
          <WeatherInfo {...weather} />
        </WeatherCard>
        <WeatherCard
          label="Tomorrow"
          tempUnit={tempUnit}
          handleUnit={toggleTempUnit}
          {...forecast.tomorrow}
        />
        <WeatherCard
          label="After Tomorrow"
          tempUnit={tempUnit}
          handleUnit={toggleTempUnit}
          {...forecast.afterTomorrow}
        />
      </Container>
    </Background>
  );
}

export default Forecast;
