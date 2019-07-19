import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Project from "./project";
import Contact from "./contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/project">project</NavLink></li>
                        <li><NavLink to="/contact">contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/project" component={Project}></Route>
                        <Route path="/contact" component={Contact}></Route>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
