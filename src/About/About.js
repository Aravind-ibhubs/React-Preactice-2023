import React,{useState, useReducer} from "react";
import "../App.css";

const todosInitialValue = [
    {
        "id" : 0,
        "Task": "Doing React js",
        "Completed" : false
    },
    {
        "id" : 1,
        "Task" : "Bug bounty",
        "Completed" : false
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case "Completed":
            return state.map((tasks) => {
                if (tasks.id === action.id) {
                    return {...tasks, "Completed" : !tasks.Completed};
                } else {
                    return tasks;
                }
            });
        default:
            return state;
    }
}


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
            <div>
                <Todos />
            </div>
        </div>
        )
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, todosInitialValue);

    const checkTheTodo = (todo) => {
        dispatch({type : "Completed", id: todo.id});
    }

    return (
        <>
            {todos.map(todo => (
                <div key={todo.id}>
                    <label>
                        <input 
                            type="checkbox"
                            checked={todo.Completed}
                            onClick={() => checkTheTodo(todo)}
                        />
                        {todo.Task}
                    </label>
                </div>
            ))}
        </>
    )
};


export default About
