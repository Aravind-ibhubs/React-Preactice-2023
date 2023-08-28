import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

function Navigation() {
    const navMainWidth = {
        width: '60vw'
    };


    return (
        <nav style={navMainWidth}>
            <ul className="button-container">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/context">Context</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
