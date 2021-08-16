import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import AppLayout from "./AppLayout";


const RestrictedRoute = ({
  component: Component,
  authUser,
  expiresJWT,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authUser && expiresJWT ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const MainApp = () => {
  return (
    <div className="app-main">
      <Switch>
        <Route exact path="/login" component={null} />
        <RestrictedRoute
          path="/"
          authUser={true}
          expiresJWT={true}
          component={AppLayout}
        />
      </Switch>
    </div>
  );
};

export default MainApp;
