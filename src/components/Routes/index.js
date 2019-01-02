import React from 'react'
import Home from "./Home";
import {Route, Switch} from "react-router";
import Character from "./Character";
import Search from './Search';
import Login from './Login';
import NotFound from "./errors/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login} />
      <Route path="/account" component={NotFound} />
      <Route path="/favorites" component={NotFound} />

      <Route path="/search/:query" component={Search} />
      <Route path="/:username/:character" component={Character} />
    </Switch>
  )
};

export default Routes