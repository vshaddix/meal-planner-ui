import React from 'react'
import { isLoggedIn } from '../utils/authUtil';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }}
    />
  )
};

export default PrivateRoute;
