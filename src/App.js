import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import PhotoBackground from './components/PhotoBackground';
import Header from './components/Header';
import Routes from './Routes';

import './config/Reactotron';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <PhotoBackground>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </PhotoBackground>
    </Provider>
  );
}

export default App;
