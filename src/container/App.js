import React, { Component } from 'react';
import { isLoggedIn } from '../utils/AuthUtil';
import MainMenu from "../components/MainMenu/MainMenu";

class App extends Component {
  render() {
    const mainMenu = isLoggedIn() ? (<MainMenu/>) : '';
    return (
      <div>
        <h3>Meal planning web software</h3>
        <div>{mainMenu}</div>
      </div>
    );
  }
}

export default App;