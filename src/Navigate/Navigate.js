import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"

function Navigation() {
    const navMainWidth = {
        width: '60vw'
    };

    return (
        <nav style={navMainWidth}>
            <ul className="button-container">
                <li>
                    <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active-link': '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link': '')}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/context" className={({ isActive }) => (isActive ? 'active-link': '')}>Context</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
