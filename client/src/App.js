import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/"
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar />
        <Switch> 
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    </Router>
    );
  }
}

export default App;
