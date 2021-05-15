import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Pokemons from '../pages/Pokemons';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />

      <Route exact path="/register" component={Register} />

      <PrivateRoute exact path="/pokemons" component={Pokemons} />

      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);

export default Router;
