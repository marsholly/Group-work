import React from 'react';
import { render } from 'react-dom'; //directly pulling out from react-dom
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import '../css/style.css';

import App from './App';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>,
  document.getElementById('root')
);
