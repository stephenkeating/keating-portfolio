import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Nav from './Components/Nav';
import { createBrowserHistory } from 'history';

import './App.css';

const App = () => {

  const history = createBrowserHistory({
    basename: 'base-name'
  }) 

  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;