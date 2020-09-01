import { combineReducers } from 'redux';

import background from './background/reducer';
import forecast from './forecast/reducer';
import weather from './weather/reducer';

export default combineReducers({ background, forecast, weather });
