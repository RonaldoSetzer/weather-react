import React from 'react';

import GlobalStyles from './styles/global';
import Forecast from './pages/Forecast';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Forecast />
    </React.Fragment>
  );
}

export default App;
