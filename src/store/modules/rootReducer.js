import { combineReducers } from 'redux';

import background from './background/reducer';
import weather from './weather/reducer';

export default combineReducers({ background, weather });
