import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar'
import { BrowserRoute as Router, Route } from "react-router-dom";

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
