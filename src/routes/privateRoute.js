import React from 'react'
import isLoggedIn from '../utils/authUtil';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUserLoggedIn = isLoggedIn();

  return (
    <Route
      {...rest}
      render={props =>
        isUserLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
};

export default PrivateRoute;
