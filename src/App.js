import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Nav from './Components/Nav';

import './App.css';

const App = () => {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;