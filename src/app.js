import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { routes } from "./routes";
import "./app.css";

export const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          const { title, Component, path } = route;
          return (
            <Route
              key={index}
              path={path}
              exact
              render={(props) => <Component {...props} />}
            />
          );
        })}
      </Switch>
    </Router>
  );
};
