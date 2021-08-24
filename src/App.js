import React, { useEffect, useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Info from "./components/Info";
import Surprise from "./components/Surprise";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route exact path="/" component={Search} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/surprise" component={Surprise} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
