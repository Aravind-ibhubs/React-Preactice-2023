import React,{createContext, useContext, useState} from "react";

const UserContext = createContext()

function UserComponent1() {
    const userName = useState("Sai priya");

    return (
        <UserContext.Provider value={userName}>
            <h1>Hello UserComponent1</h1>
            <UserComponent2 />
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
