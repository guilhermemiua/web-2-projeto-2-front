import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../helpers';

const PrivateRoute = ({ path, exact, component }) => {
  const hasToken = getToken();

  return hasToken ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
