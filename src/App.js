import React from 'react';

import GlobalStyles from './styles/global';
import logo from './assets/images/code-with-beer.png';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <img src={logo} />
    </React.Fragment>
  );
}

export default App;
