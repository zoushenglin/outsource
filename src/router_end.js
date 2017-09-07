import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import End from './routes/End';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={End} />
    </Router>
  );
}

export default RouterConfig;
