import { combineReducers } from 'redux';

import forecast from './forecast/reducer';
import weather from './weather/reducer';

export default combineReducers({ forecast, weather });
