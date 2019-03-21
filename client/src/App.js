import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
