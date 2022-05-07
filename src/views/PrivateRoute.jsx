import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { contextAuth } from '../context/ProviderAuth';

export default function PrivateRoute({ children, ...rest }) {
  let authFromDB = useContext(contextAuth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authFromDB.userRecieved ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
