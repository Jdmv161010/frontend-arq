import { Navbar } from 'components';
import { Home } from 'pages';
import React from 'react';
import './index.scss';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
};

export default App;
