// import Router from "express";
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>this is my navbar</h1>
                <div>
                    <p>Home</p>
                </div>
                <div>
                    <p>Portfolio</p>
                </div>
                <div>
                    <p>Contact Me</p>
                </div>
            </div>
        );
    }
}

export default Header;