/**
 * /* eslint-disable global-require
 *
 * @format
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './modules/Home';
import Product from './modules/Products';

export default (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/products' component={Product} />
    </Switch>
  </div>
);
