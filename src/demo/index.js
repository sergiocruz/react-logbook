import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Redirect, Router, Route, browserHistory } from 'react-router';

// Components
import InlineExample from './Inline';
import AjaxExample from './Ajax';
import FirebaseExample from './Firebase';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Redirect from="/" to="/inline" />
      <Route path="/" component={App}>
        <Route path="inline" component={InlineExample} />
        <Route path="ajax" component={AjaxExample} />
        <Route path="firebase" component={FirebaseExample} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
