import { Switch } from "react-router-dom";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import { Suspense } from "react";

import PlaygroundContainer from "./containers/PlaygroundContainer";
import TestComponent from "./components/testComponent";
import Navigation from "./components/navigation/Navigation";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={PlaygroundContainer} />
      <Route path="/component" component={TestComponent} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <Navigation />
      <Suspense>{routes}</Suspense>
    </div>
  );
}

export default App;
