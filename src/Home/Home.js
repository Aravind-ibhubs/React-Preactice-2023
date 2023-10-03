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
        }, 3000);
    }

    /*
    if true, values is changed.If false, values is not changed
    shouldComponentUpdate() {
        return true/false;
    }
    getSnapshotBeforeUpdate(prevState, prevProps) {
        let paraElement = document.getElementById("para1");
        paraElement.textContent = `Previous state ${prevProps.username3}`;
    }*/

    render() {
        const tParagragh = {
            backgroundColor: this.state.bgColors,
            color: 'Red'
        };
    
        return (
            <div className="body-container">
                <h1 style={tParagragh}>Famous film actor/actress :  {this.state.username1} </h1>
                <p>Tis is a bird</p>
                <p>This other class :{this.state.username4}</p>
                <p>There are brain with navigating system</p>
                <div>
                    <h2>{this.state.username2} : {this.state.username3}</h2>
                    <p>It a Human responsibility...</p>
                    <p>Pigeon is environment friendly.</p>
                    <p>Muslims is like to feed the pigeon with caging them.</p>
                    <video width="320" height="240" controls>
                        <source src="https://www.facebook.com/watch?v=1015709976133525" type="video/mp4" />
                    </video>
                </div>
                <button onClick={this.changeName}>update from board</button>
            </div>
        )
    }
}


export default Home
