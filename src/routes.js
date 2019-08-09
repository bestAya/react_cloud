import React from 'react';
import { Route } from 'react-router-dom';
import Login from './views/login';
import Home from "./views/Layout/home"
export default (
  <>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
  </>
)