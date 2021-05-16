import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Pokemons from '../pages/Pokemons';
import NewPokemon from '../pages/Pokemons/NewPokemon';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />

      <Route exact path="/register" component={Register} />

      <PrivateRoute exact path="/pokemons" component={Pokemons} />

      <PrivateRoute exact path="/pokemons/new" component={NewPokemon} />

      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);

export default Router;
