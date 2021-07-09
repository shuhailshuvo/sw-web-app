/* eslint-disable global-require */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./modules/Home";

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  </div>
);
