import React from 'react';
import { Router, Route, hashHistory } from 'dva/router';
import Main from './routes/Main';
import MainPage from "./routes/MainPage.js";

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={MainPage} />
      <Route path="/Main" component={Main} />
    </Router>
  );
}

export default RouterConfig;
