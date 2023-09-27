import React from "react";
import "./App.css";

function NotFound(props) {
    return (
        <div className="page-box">
            <h1><marker>{props.pageStatus}</marker> Page  not Found</h1>
        </div>
    )
}

export default NotFound
