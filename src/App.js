import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import Forecast from './pages/Forecast';
import PhotoBackground from './components/PhotoBackground';

import './config/Reactotron';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <PhotoBackground>
        <Forecast />
      </PhotoBackground>
    </Provider>
  );
}

export default App;
