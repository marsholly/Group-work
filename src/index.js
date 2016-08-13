import React from 'react';
import { render } from 'react-dom'; //directly pulling out from react-dom
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './css/style.css';

import App from './components/App';
import About from './components/About';
import Welcome from './components/Welcome';
import Bird from './components/Bird';
import Swapi from './components/Swapi';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome}/>
      <Route path='about' component={About}/>
      <Route path='birds/:name' component={Bird} />
      <Route path='swapi/:id' component={Swapi} />
    </Route>
  </Router>,
  document.getElementById('root')
);
