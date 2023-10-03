import React from "react";
import "./App.css";

function PageMessage(props) {
    return (
        <>
            <h1>{props.msg.leader} : {props.msg.text}</h1>
        </>
    )
}

function NotFound(props) {
    const testData = {"text": "emi peek tunndi governnment", "leader": "PK"}

    const goodnews = (a, b) => {
        alert(a);
        alert(b.type);
    };

    return (
        <div className="body-container">
            <PageMessage msg={testData} />
            <h1><marker>{props.pageStatus}</marker> Page  not Found</h1>
            <form>
                <label>Name</label>
                <input type="text" />
            </form>
            <button onClick={(event) => goodnews("Rey verri p jAGAN", event)}>Press here for support</button>
        </div>
    )
}

export default NotFound
