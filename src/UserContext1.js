import React,{createContext, useContext, useState, useRef, useEffect} from "react";
import "./App.css";

const UserContext = createContext()

function UserComponent1() {
    const userName = useState("Sai priya");
    let [inputValue, ChangeValue] = useState();
    const count = useRef(0);
    const textInput = useRef();
    const [inputValue1, changeTextValue] = useState("");
    const previousValue = useRef("");

    useEffect(() => {
        count.current = count.current + 1;
    })

    useEffect(() => {
        previousValue.current = inputValue1;
    },[inputValue1])

    const focusElement = () => {
        textInput.current.focus();
    }

    return (
        <UserContext.Provider value={userName}>
            <div className="body-container">
                <h1>Hello UserComponent1</h1>
                <div className="near-input">
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={(e) => ChangeValue(e.target.value)}
                    />
                    <h4>Rendered count : {count.current}</h4>
                </div>
                <div className="near-input">
                    <label>Input Focus : </label>
                    <input type="text" ref={textInput}/>
                    <button onClick={focusElement}>Focus</button><br />
                </div>
                <div className="near-input">
                    <input 
                        type="text" 
                        value={inputValue1}
                        onChange={(e) => changeTextValue(e.target.value)}
                    />
                    <h1>present value : {inputValue1}</h1>
                    <h1>Past Value : {previousValue.current}</h1>
                </div>
                <UserComponent2 />
            </div>
        </UserContext.Provider>
    )
}

function UserComponent2() {

    return (
        <>
            <h1>Hello UserComponent2 </h1>
            <UserComponent3 />
        </>
    )
}

function UserComponent3() {
    return (
        <>
            <h1>Hello UserComponent3</h1>
            <UserComponent4 />
        </>
    )
}

function UserComponent4() {
    const userData = useContext(UserContext)
    return (
        <>
            <h1>Hello {userData}</h1>
        </>
    )
}

export default UserComponent1
