import React from 'react';
import { Route } from 'react-router';
import App from '../container/App';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import IndexRoute from './IndexRoute';

import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import DashboardPage from '../components/DashboardPage';
import UnitOfMeasurePage from '../components/UomPage';
import IngredientsPage from '../components/IngredientsPage';
import CategoriesPage from '../components/CategoriesPage';
import RecipePage from '../components/RecipePage';

export default () => (
  <Router>
    <IndexRoute path='/' component={App}/>
    <Route path='/login' component={LoginPage} />
    <Route path='/register' component={RegisterPage} />
    <PrivateRoute path='/dashboard' component={DashboardPage}/>
    <PrivateRoute path='/uoms' component={UnitOfMeasurePage}/>
    <PrivateRoute path='/ingredients' component={IngredientsPage}/>
    <PrivateRoute path='/categories' component={CategoriesPage}/>
    <PrivateRoute path='/recipes' component={RecipePage}/>
    <PrivateRoute path='/uoms/create' component={UnitOfMeasurePage}/>
  </Router>
);
