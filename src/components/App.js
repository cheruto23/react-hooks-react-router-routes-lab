import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
