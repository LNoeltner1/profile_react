// import Router from "express";
import React, { Component } from "react";
// import Router from "react-router";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
        
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink to="/" activeClassName="selected">Lauren Noeltner</NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                        <div><NavLink to="/" activeClassName="selected">About Me</NavLink></div>
                        <div><NavLink to="/Portfolio" activeClassName="selected">Portfolio</NavLink></div>
                        <div><NavLink to="/Contact" activeClassName="selected">Contact Me</NavLink></div>
                        
                        {/* <a className="nav-link active" href="resume.html">Resume</a> */}
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Header;



