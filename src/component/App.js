import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CleverExTheme from "../pages/CleverExTheme";
import CleverDevOpsTheme from "../pages/CleverDevOpsTheme";
import CleverAgileTheme from "../pages/CleverAgileTheme";
import CleverCloudTheme from "../pages/CleverCloudTheme";
import CleverDevelopmentTheme from "../pages/CleverDevelopmentTheme";
import CleverQaTheme from "../pages/CleverQaTheme";
import CleverHomeTheme from "../pages/CleverHomeTheme";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CleverHomeTheme}></Route>
        {/*  <Route exact path="/home" component={CleverExTheme}></Route> */}
        <Route exact path="/ex" component={CleverExTheme}></Route>
        <Route exact path="/devOps" component={CleverDevOpsTheme}></Route>
        <Route exact path="/agile" component={CleverAgileTheme}></Route>
        <Route exact path="/cloud" component={CleverCloudTheme}></Route>
        <Route
          exact
          path="/development"
          component={CleverDevelopmentTheme}
        ></Route>
        <Route exact path="/qa" component={CleverQaTheme}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
