import React from 'react';
import { Route } from 'react-router';
import App from '../container/App';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import DashboardPage from '../components/dashboardPage';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import IndexRoute from './indexRoute';

export default () => (
  <Router>
    <IndexRoute path='/' component={App}/>
    <Route path='/login' component={LoginPage} />
    <Route path='/register' component={RegisterPage} />
    <PrivateRoute path='/dashboard' component={DashboardPage}/>
  </Router>
);
