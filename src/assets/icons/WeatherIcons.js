import Atmosphere from './Atmosphere';
import ClearDay from './ClearDay';
import ClearNight from './ClearNight';
import CloudDay from './CloudDay';
import CloudNight from './CloudNight';
import Clouds from './Clouds';
import Cloudly from './Cloudly';
import Compass from './Compass';
import Drizzle from './Drizzle';
import Loading from './Loading';
import Rain from './Rain';
import Snow from './Snow';
import Thunderstorm from './Thunderstorm';

export const ListIcons = {
  '11d': Thunderstorm,
  '09d': Drizzle,
  '13d': Snow,
  '50d': Atmosphere,
  '10d': Rain,
  '01d': ClearDay,
  '01n': ClearNight,
  '02d': CloudDay,
  '02n': CloudNight,
  '03d': Clouds,
  '03n': Clouds,
  '04d': Cloudly,
  '04n': Cloudly,
};

export const icons = key => {
  return ListIcons[key];
};
