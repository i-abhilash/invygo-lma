import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import DashboardPage from "./containers/dashboard";
import LogInPage from "./containers/login";

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LogInPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
};