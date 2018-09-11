import './App.css';

import React, {Component} from "react";
import Header from './Header';
import Main from './Main';
import {Route} from "react-router-dom";
import Weather from "./Weather"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Route
          path="/locationWeather/:id"
          component={Weather}
        />
      </div>
    );
  }
}

export default App;
