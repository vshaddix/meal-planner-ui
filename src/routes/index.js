import React from 'react';
import { Route } from 'react-router';
import App from '../container/App';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import IndexRoute from './indexRoute';

import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import DashboardPage from '../components/dashboardPage';
import UnitOfMeasurePage from '../components/uomPage';
import IngredientsPage from '../components/ingredientsPage';
import CategoriesPage from '../components/CategoriesPage';

export default () => (
  <Router>
    <IndexRoute path='/' component={App}/>
    <Route path='/login' component={LoginPage} />
    <Route path='/register' component={RegisterPage} />
    <PrivateRoute path='/dashboard' component={DashboardPage}/>
    <PrivateRoute path='/uoms' component={UnitOfMeasurePage}/>
    <PrivateRoute path='/ingredients' component={IngredientsPage}/>
    <PrivateRoute path='/categories' component={CategoriesPage}/>
    <PrivateRoute path='/uoms/create' component={UnitOfMeasurePage}/>
  </Router>
);
