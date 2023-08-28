import React from "react";
import "../App.css";

function Home() {
    const tParagragh = {
        backgroundColor: 'Blue',
        color: 'Red'
    };

    return (
        <div className="page-box">
            <h1 className="titleOfPage">Pigeon</h1>
            <p style={tParagragh}>Tis is a bird</p>
            <p>There atre trwo wings</p>
            <p>There are brain with navigating system</p>
            <div>
                <h2>Provide some help to pigeon is a responsibile.</h2>
                <p>It a Human responsibility...</p>
                <h2>Pigeon is environment friendly.</h2>
                <p>Muslims is like to feed the pigeon with caging them.</p>
            </div>
        </div>
    )
}


export default Home
