import React,{Component, memo} from "react";
import "../App.css";

class Context extends Component {
    constructor() {
        super();
        this.state = {
            divColor : "orange",
            showChild: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({divColor : "yellow"});
        },2000)
    }

    componentDidUpdate() {
        let paraElement = document.getElementById("para1");
        paraElement.innerHTML  = "The updated : " + this.state.divColor;
    }

    deleteChild = () => {
        this.setState({showChild: !this.state.showChild});
    }

    render() {
        let pChild;

        if (this.state.showChild) {
            pChild = <SubContext />;
        }
        return (
            <div className="body-container">
                {pChild}
                <h3>Sunny leone age is 90.But still virgin</h3>
                <h3>present state : {this.state.divColor}</h3>
                <div id="para1"></div>
                <button onClick={this.deleteChild}>{this.state.showChild ? "Remove child" : "show child"}</button>
            </div>
        )
    }
}

class SubContext extends Component {

    render() {
        return (
            <>
                <h3>Universal facts</h3>
                <p>Mahatma atma</p>
                <p>Prushu pathi arundathi ki one side lover.</p>
                <h3>Amreshi puri is a marriage pantulu.Try to do marriage for arundathi and pashu pathi.</h3>
            </>
        )
    }
}


export default memo(Context)
