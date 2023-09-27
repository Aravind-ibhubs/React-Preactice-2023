import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"

function Navigation() {

    return (
        <nav className="button-container">
            <NavLink to="/">
                <img 
                    src="https://img.freepik.com/free-vector/creative-gradient-laptop-logo-template_23-2149010269.jpg?w=740&t=st
                    =1695451541~exp=1695452141~hmac=72ac1dc0a7374c9b4320f289ad2b0f51df6c4602214b3113181e53e4964bc6fd" 
                    alt="testing"
                    className="logo-img"
                />
            </NavLink>
            <ul className="list-container">
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
