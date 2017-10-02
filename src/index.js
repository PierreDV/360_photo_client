import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './style.css';
import Home from './components/home'
import Panorama from './components/panorama'

ReactDOM.render(
  <Router>
    <div>
      <div id="navbar">
        <h1>The beauty of panoramic photography</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/boat">Boat</Link></li>
          <li><Link to="/sunset">Sunset</Link></li>
          <li><Link to="/lake">Lake</Link></li>
          <li><Link to="/forest">Forest</Link></li>
        </ul>
      </div>
      <Route exact path="/" component={Home} />
      <Route
        path="/boat"
        render={(props) => <Panorama {...props} imageURL="./boat.jpg" />}
      />
      <Route
        path="/sunset"
        render={(props) => <Panorama {...props} imageURL="./sunset.jpg" />}
      />
      <Route
        path="/lake"
        render={(props) => <Panorama {...props} imageURL="./lake.jpg" />}
      />
      <Route
        path="/forest"
        render={(props) => <Panorama {...props} imageURL="./forest.jpg" />}
      />
    </div>
  </Router>
  ,
  document.querySelector('#root')
);
