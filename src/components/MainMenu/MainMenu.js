import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.scss';

class MainMenu extends Component {
  render () {
    return (
      <ul className="navigation">
        <li><NavLink activeClassName="active" to='/dashboard'>Home</NavLink></li>
        <li><NavLink activeClassName="active" to='/uoms'>Unit of measures</NavLink></li>
        <li><NavLink activeClassName="active" to='/ingredients'>Ingredients</NavLink></li>
        <li><NavLink activeClassName="active" to='/categories'>Categories</NavLink></li>
        <li><NavLink activeClassName="active" to='/recipes'>Recipes</NavLink></li>
      </ul>
    );
  }
}

export default MainMenu;
