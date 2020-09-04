import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Forecast from '../pages/Forecast';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Forecast} />
      <Route path="/about" exact component={About} />
    </Switch>
  );
}

export default Routes;
