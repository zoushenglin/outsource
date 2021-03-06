import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import MainPage from "./routes/MainPage.js";

import Problem from "./routes/Problem.js";


function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={MainPage} />
      <Route path="/problem" component={Problem} />
    </Router>
  );
}

export default RouterConfig;
