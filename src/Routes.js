import React from 'react';
// Switch renders the appropriate page
import { Switch, Route } from 'react-router-dom';
// allows us to route to all pages within the Pages folder
// must update /Pages/index.js when adding pages
import Pages from './Pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/fivegames" component={Pages.FiveGames} />
      <Route path="/earworm" component={Pages.Earworm} />
      <Route exact path="/" component={Pages.Home} />
    </Switch>
  );
};

export default Routes;