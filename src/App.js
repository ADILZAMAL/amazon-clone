import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
