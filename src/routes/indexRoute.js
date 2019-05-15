import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const IndexRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return props.location.pathname === '/' ? (
          <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }}
    />
  )
};

export default IndexRoute;
