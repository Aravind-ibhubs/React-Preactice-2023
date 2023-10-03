import React,{useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "../App.css"

function Navigation() {
    const [imgSrc] = useState("https://img.freepik.com/free-vector/creative-gradient-laptop-logo-template_23-2149010269.jpg?w=740&t=st=1695451541~exp=1695452141~hmac=72ac1dc0a7374c9b4320f289ad2b0f51df6c4602214b3113181e53e4964bc6fd")
    const [timer, incTimer] = useState({
        "hours" : 0,
        "minutes": 0,
        "second": 0
    });

    useEffect(() => {
        setInterval(() => {
            incTimer(prevState => {
                if(prevState.second >  60) {
                    return {...prevState, "minutes" : prevState.minutes + 1,"second" : 0}
                } else if (prevState.minutes  > 60) {
                    return {...prevState, "hours": prevState.hours + 1,"minutes": 0, "second": 0}
                } else {
                    return {...prevState, "second" : prevState.second + 1}
                }
            });
        }, 5000)
    },[timer]);

    return (
        <nav className="button-container">
            <NavLink to="/">
                <img 
                    src={imgSrc}
                    alt="testing"
                    className="logo-img"
                />
            </NavLink>
            <ul className="list-container">
                <li>
                    {timer.hours<10 ? "0"+timer.hours.toString(): timer.hours} : 
                     {timer.minutes<10 ? "0"+timer.minutes.toString() : timer.minutes} :  
                     {timer.second<10 ? "0"+timer.second.toString() : timer.second}
                </li>
                <li>
                    <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active-link': '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link': '')}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/context" className={({ isActive }) => (isActive ? 'active-link': '')}>Context</NavLink>
                </li>
                <li>
                    <NavLink to="/user" className={({ isActive }) => (isActive ? 'active-link': '')}>User</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
