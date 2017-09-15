import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import Result from "./routes/Result";

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={Result} />
    </Router>
  );
}

export default RouterConfig;
