import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBox from '../../components/SearchBox';
import WeatherCard from '../../components/WeatherCard';
import WeatherInfo from '../../components/WeatherInfo';

import { ClearDay } from '../../assets/icons';
import { colorlevels } from '../../utils/colors';
import { Title, List } from '../../components/ui';

import { Container, Background } from './styles';
import { handleBackgroundColor } from '../../helpers/mapTemperature';

import { requestForecast } from '../../store/modules/weather/actions';

const info = {
  type: 'Sunny',
  wind: 'NO 6.4km/h',
  humidity: '78%',
  pressure: '1003hPA',
};

function Forecast() {
  const dispatch = useDispatch();
  const { today, tomorrow, afterTomorrow, weather } = useSelector(
    state => state.weather,
  );
  const background = handleBackgroundColor(today.celsius, 3);

  function handleSearch(city) {
    dispatch(requestForecast(city));
  }

  return (
    <Background background={background}>
      <Container>
        <SearchBox handleSearch={handleSearch} />
        <WeatherCard label="Today" icon={<ClearDay />} {...today}>
          {weather && (
            <WeatherInfo
              title={info.type}
              wind={info.wind}
              humidity={info.humidity}
              pressure={info.pressure}
            />
          )}
        </WeatherCard>
        <WeatherCard label="Tomorrow" {...tomorrow} />
        <WeatherCard label="After Tomorrow" {...afterTomorrow} />
      </Container>
    </Background>
  );
}

export default Forecast;
