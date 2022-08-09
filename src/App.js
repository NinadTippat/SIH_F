import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Home from "./components/Home/Home";
import Chat from "./components/Chat";
import About from "./components/About";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
          <Chat />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Router>
    </>
  );
};

export default App;
