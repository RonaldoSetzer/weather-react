import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBox from '../../components/SearchBox';
import WeatherCard from '../../components/WeatherCard';
import WeatherInfo from '../../components/WeatherInfo';

import { Title, List } from '../../components/ui';
import { Container, Background } from './styles';
import { getBgColorByTemperature } from '../../helpers/temperature';

import { requestForecast } from '../../store/modules/forecast/actions';
import { requestWeather } from '../../store/modules/weather/actions';

function Forecast() {
  const [tempUnit, setTempUnit] = useState('celsius');
  const weather = useSelector(state => state.weather);
  const forecast = useSelector(state => state.forecast);
  const dispatch = useDispatch();

  const background = getBgColorByTemperature();

  function handleSearch(city) {
    dispatch(requestWeather(city));
    dispatch(requestForecast(city));
  }

  function toggleTempUnit() {
    const unit = tempUnit === 'celsius' ? 'fahrenheit' : 'celsius';
    setTempUnit(unit);
  }

  return (
    <Background background={background}>
      <Container>
        <SearchBox handleSearch={handleSearch} />
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
