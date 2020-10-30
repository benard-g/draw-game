import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Routes from './Routes';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Draw game !</title>
      </Helmet>

      <Routes />
    </HelmetProvider>
  );
}

export default App;
