import React from "react";
import "../App.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            username1: "Nidhi Agarwal",
            username2: "Icon star",
            username3: "Allu arjun",
            username4: "Second family",
            bgColors: "skyblue",
            bgState: false
        };
    }

    changeName = () => {
        this.setState({username1: this.state.username1 === "Nidhi Agarwal" ? "Hashin" : "Nidhi Agarwal",username4: "Naadi007"});
    }

    static getDerivedStateFromProps(props, state) {
        return {username4: props.page1};
    } 

    componentDidMount() {
        setInterval(() => {
            this.setState({bgColors : this.state.bgState ? "yellow" : "skyblue", bgState: !this.state.bgState});
        }, 1000)
    }

    render() {
        const tParagragh = {
            backgroundColor: this.state.bgColors,
            color: 'Red'
        };
    
        return (
            <div className="page-box">
                <h1 style={tParagragh}>Famous film actor/actress :  {this.state.username1} </h1>
                <p>Tis is a bird</p>
                <p>This other class :{this.state.username4}</p>
                <p>There are brain with navigating system</p>
                <div>
                    <h2>{this.state.username2} : {this.state.username3}</h2>
                    <p>It a Human responsibility...</p>
                    <h2>Pigeon is environment friendly.</h2>
                    <p>Muslims is like to feed the pigeon with caging them.</p>
                </div>
                <button onClick={this.changeName}>update from board</button>
            </div>
        )
    }
}


export default Home
