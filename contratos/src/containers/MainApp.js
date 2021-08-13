import React from "react";
import { Route, Switch } from "react-router-dom";
import AppLayout from "./AppLayout";

const MainApp = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={AppLayout} />
    </Switch>
  );
};

export default MainApp;
