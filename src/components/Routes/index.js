import React from 'react'
import Home from "./Home";
import {Route, Switch} from "react-router";
import Character from "./Character";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:username/:character" component={Character} />
    </Switch>
  )
};

export default Routes