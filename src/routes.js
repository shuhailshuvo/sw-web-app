import React from "react";
import { Route, Switch } from "react-router-dom";
import AppRoute from "./components/AppRoute";
import Login from "./modules/Login";
import Product from "./modules/Products";
import Signup from "./modules/Signup";
import Wallet from "./modules/Wallet";

export default (
  <div>
    <Switch>
      <Route exact path='https://shuhailshuvo.github.io/sw-web-app/' component={Login} />
      <Route exact path='https://shuhailshuvo.github.io/sw-web-app/login' component={Login} />
      <Route exact path='https://shuhailshuvo.github.io/sw-web-app/signup' component={Signup} />
      <AppRoute exact path='/products' component={Product} />
      <AppRoute exact path='/wallet' component={Wallet} />
    </Switch>
  </div>
);
