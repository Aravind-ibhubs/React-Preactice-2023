import React,{useState, useEffect} from "react";
import "../App.css";

function About(){
    const [timerIn, decTimer] = useState(100);

    useEffect(() => {
        setInterval(() => {
            decTimer((timerIn) => timerIn - 1);
        }, 10000);
    })

    return (
        <div className="page-box">
            <h1>Timer is <mark className="mark-class">{ timerIn }</mark></h1>
        </div>
        )
}


export default About
