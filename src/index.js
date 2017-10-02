import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './style.css';
import Home from './components/home'
import Panorama from './components/panorama'

ReactDOM.render(
  <Router>
    <div>
      <h1>The beauty of panoramic photography</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/boat">Boat</Link></li>
        <li><Link to="/park">Park</Link></li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route
        path="/boat"
        render={(props) => <Panorama {...props} imageURL="./boat.jpg" />}
      />
      <Route
        path="/park"
        render={(props) => <Panorama {...props} imageURL="./park.jpg" />}
      />
    </div>
  </Router>
  ,
  document.querySelector('#root')
);
