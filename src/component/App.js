import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CleverExTheme from "../pages/CleverExTheme";
import CleverDevOpsTheme from "../pages/CleverDevOpsTheme";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CleverExTheme}></Route>
        {/*  <Route exact path="/home" component={CleverExTheme}></Route> */}
        <Route exact path="/ex" component={CleverExTheme}></Route>
        <Route exact path="/devOps" component={CleverDevOpsTheme}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
