import React from 'react';

import SearchBox from '../../components/SearchBox';
import WeatherCard from '../../components/WeatherCard';
import WeatherInfo from '../../components/WeatherInfo';

import { ClearDay } from '../../assets/icons';
import { colorlevels } from '../../utils/colors';
import { Title, List } from '../../components/ui';

import { Container, Background } from './styles';

const [normal, lighten, darken, darkest] = colorlevels.yellow;

const weather = {
  today: {
    label: 'Today',
    icon: <ClearDay />,
    temperature: '32C',
    backgroundColor: normal,
    info: {
      type: 'Sunny',
      wind: 'NO 6.4km/h',
      humidity: '78%',
      pressure: '1003hPA',
    },
  },
  tomorrow: {
    label: 'Tomorrow',
    temperature: '30C',
    backgroundColor: lighten,
  },
  afterTomorrow: {
    label: 'After Tomorrow',
    temperature: '30C',
    backgroundColor: darken,
  },
};

function Forecast() {
  const { today, tomorrow, afterTomorrow } = weather;

  return (
    <Background background={darkest}>
      <Container>
        <SearchBox />
        <WeatherCard
          label={today.label}
          icon={today.icon}
          temperature={today.temperature}
          backgroundColor={today.backgroundColor}
        >
          <WeatherInfo
            title={today.info.type}
            wind={today.info.wind}
            humidity={today.info.humidity}
            pressure={today.info.pressure}
          />
        </WeatherCard>
        <WeatherCard
          label={tomorrow.label}
          temperature={tomorrow.temperature}
          backgroundColor={tomorrow.backgroundColor}
        />
        <WeatherCard
          label={afterTomorrow.label}
          temperature={afterTomorrow.temperature}
          backgroundColor={afterTomorrow.backgroundColor}
        />
      </Container>
    </Background>
  );
}

export default Forecast;
