import { combineReducers } from 'redux';

import background from './background/reducer';
import forecast from './forecast/reducer';

export default combineReducers({ background, forecast });
