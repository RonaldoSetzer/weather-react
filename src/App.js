import React from 'react';

import GlobalStyles from './styles/global';
import Forecast from './pages/Forecast';
import PhotoBackground from './components/PhotoBackground';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <PhotoBackground>
        <Forecast />
      </PhotoBackground>
    </React.Fragment>
  );
}

export default App;
