import { Footer, Navbar } from 'components';
import { Home } from 'pages';
import React from 'react';
import './styles/index.scss';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container flex justify-center align-stretch">
        <div className="layout">
          <Home />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
