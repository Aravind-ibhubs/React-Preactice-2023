import React,{useState} from "react";
import "../App.css";


function About(){
    const [time, decTimer] = useState();
    const [amount, incAmount] = useState(10000);
    const [vehicle, changeVehicle] = useState("Bajaj");
    const [place, reLocate] = useState("Chor bajar");
    const [personDetails, updateDetails] = useState({
        "Name": "King aravind",
        "Age" : 27,
        "Beauty" : "Dream boy for all over girls",
        "Achievements": "He achieve world most prestigious award  awards"
    });

    const setPerson = () => {
        updateDetails(previousState => {
            return {...previousState,"Age": 140}
        })
    }

    return (
        <div className="body-container">
            <h1>We buy {vehicle} at {place} @ {time} with RS. {amount} /-</h1>
            <button onClick={() => decTimer("Morning")}>Time</button> <br />
            <button onClick={() => incAmount(amount + 20)}>Amount</button> <br />
            <button onClick={() => changeVehicle("Car")}>transport</button> <br />
            <button onClick={() => reLocate("Kapa")}>place</button> <br />
            <h2>{personDetails.Name} is a {personDetails.Beauty}.</h2>
            <h3>World people  bugs him to take {personDetails.Achievements} at age {personDetails.Age}</h3>
            <button onClick={setPerson}>Updates on person details</button>
        </div>
        )
}


export default About
