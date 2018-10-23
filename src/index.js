import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./landingpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppLayout } from "./applayout";
import { ProtectedRoute } from "./protected.route";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Protected React Router</h1>

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
