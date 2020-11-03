// import Router from "express";
import React, { Component } from "react";
// import Router from "react-router";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
        
            <div>
                <h1>this is my navbar</h1>
                <div>
                    <NavLink to="/" activeClassName="selected">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/Portfolio" activeClassName="selected">Portfolio</NavLink>
                </div>
                <div>
                    <NavLink to="/Contact" activeClassName="selected">Contact Me</NavLink>
                </div>
            </div>

        );
    }
}

export default Header;