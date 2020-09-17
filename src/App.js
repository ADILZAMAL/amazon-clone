import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { Unsubscribe } from "@material-ui/icons";
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const usubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //User is loged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User is loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      Unsubscribe();
    };
  }, []);
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
