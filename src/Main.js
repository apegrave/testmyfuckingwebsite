import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import art_01 from "./art_01";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <NavLink exact to="/">home</NavLink>
        <NavLink to="/stuff">about</NavLink>

          <div className="content">

            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/art_01" component={art_01}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;