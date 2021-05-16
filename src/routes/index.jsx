import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Pokemons from '../pages/Pokemons';
import NewPokemon from '../pages/Pokemons/NewPokemon';
import UpdatePokemon from '../pages/Pokemons/UpdatePokemon';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/register" component={Register} />

      <PrivateRoute exact path="/pokemons" component={Pokemons} />

      <PrivateRoute exact path="/pokemons/new" component={NewPokemon} />

      <PrivateRoute
        exact
        path="/pokemons/:id/update"
        component={UpdatePokemon}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
