import React, { useEffect } from "react";
import fire from "./fire";
import Chat from "./components/Chat";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = (props) => {
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
        console.log(user);
      } else {
        // User is signed out
        // ...
        props.history.push("/");
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/chatapp" component={Chat} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
