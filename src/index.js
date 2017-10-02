import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/home'
import Panorama from './components/panorama'

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/panorama">Park</Link></li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/panorama" component={Panorama} />
    </div>
  </Router>
  ,
  document.querySelector('#root')
);
