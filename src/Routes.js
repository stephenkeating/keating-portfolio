import React from 'react';
// Switch renders the appropriate page
import { Switch, Route } from 'react-router-dom';
// allows us to route to all pages within the Pages folder
// must update /Pages/index.js when adding pages
import Pages from './Pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" component={Pages.Signup} />
      <Route path="/login" component={Pages.Login} />
      <Route exact path="/" component={Pages.Home} />
    </Switch>
  );
};

export default Routes;