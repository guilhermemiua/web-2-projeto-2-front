import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import LoginPage from '../pages/Login';
import PokemonsPage from '../pages/Pokemons';
import PrivateRoute from './PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />

      <Route exact path="/register" component={LoginPage} />

      <PrivateRoute exact path="/pokemons" component={PokemonsPage} />

      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);

export default Router;
