import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage.js';
import Header from './components/Header.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Header />   
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);