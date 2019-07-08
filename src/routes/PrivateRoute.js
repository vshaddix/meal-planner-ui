import React from 'react'
import { isLoggedIn } from '../utils/AuthUtil';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn() ? (
          <div style={{marginLeft:'5%', marginRight: '5%', paddingTop:'3%'}}>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }}
    />
  )
};

export default PrivateRoute;
