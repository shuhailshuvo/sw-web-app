/* eslint-disable global-require */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./modules/Home";
import Wallet from "./modules/Wallet";

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/wallet" component={Wallet} />
    </Switch>
  </div>
);
