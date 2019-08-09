import React, { Component } from 'react';
// import logo from './logo.svg';
import routes from "./routes";
import { BrowserRouter, Switch } from "react-router-dom";
import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>{routes}</Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
