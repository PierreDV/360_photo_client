import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './style.css';
import Home from './components/home'
import Panorama from './components/panorama'

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <div id="navbar">
        <h1>The beauty of panoramic photography</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dusk">Dusk</Link></li>
          <li><Link to="/sunset">Sunset</Link></li>
          <li><Link to="/forest">Forest</Link></li>
          <li><Link to="/lake">Lake</Link></li>
          <li><Link to="/pier">Pier</Link></li>
        </ul>
      </div>
      <Route exact path="/" component={Home} />
      <Route
        path="/dusk"
        render={(props) => <Panorama {...props} imageURL="/dusk.JPG" />}
      />
      <Route
        path="/sunset"
        render={(props) => <Panorama {...props} imageURL="/sunset.JPG" />}
      />
      <Route
        path="/forest"
        render={(props) => <Panorama {...props} imageURL="/forest.JPG" />}
      />
      <Route
        path="/pier"
        render={(props) => <Panorama {...props} imageURL="/pier.JPG" />}
      />
      <Route
        path="/lake"
        render={(props) => <Panorama {...props} imageURL="/lake.JPG" />}
      />
    </div>
  </Router>
  ,
  document.querySelector('#root')
);
