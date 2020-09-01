import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBox from '../../components/SearchBox';
import WeatherCard from '../../components/WeatherCard';
import WeatherInfo from '../../components/WeatherInfo';

import { ClearDay } from '../../assets/icons';
import { Title, List } from '../../components/ui';

import { Container, Background } from './styles';
import { getBgColorByTemperature } from '../../helpers/temperature';

import { requestForecast } from '../../store/modules/forecast/actions';
import { requestWeather } from '../../store/modules/weather/actions';

const info = {
  type: 'Sunny',
  wind: 'NO 6.4km/h',
  humidity: '78%',
  pressure: '1003hPA',
};

function Forecast() {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);
  const { today, tomorrow, afterTomorrow } = useSelector(
    state => state.forecast,
  );

  const [tempUnit, setTempUnit] = useState('celsius');
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
          icon={<ClearDay />}
          tempUnit={tempUnit}
          handleUnit={toggleTempUnit}
          {...today}
        >
          <WeatherInfo
            title={info.type}
            wind={weather.wind}
            humidity={weather.humidity}
            pressure={weather.pressure}
          />
        </WeatherCard>
        <WeatherCard
          label="Tomorrow"
          tempUnit={tempUnit}
          handleUnit={toggleTempUnit}
          {...tomorrow}
        />
        <WeatherCard
          label="After Tomorrow"
          tempUnit={tempUnit}
          handleUnit={toggleTempUnit}
          {...afterTomorrow}
        />
      </Container>
    </Background>
  );
}

export default Forecast;
