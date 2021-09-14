import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { routes } from "./routes";
import logo from "./assets/images/logo.svg";
import "./app.css";

export const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};
