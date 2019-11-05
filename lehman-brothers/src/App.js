import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
