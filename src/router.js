import React from 'react';
import { Router, Route } from 'dva/router';
import Home from '@/pages/Home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={Home} />
    </Router>
  );
}

export default RouterConfig;
