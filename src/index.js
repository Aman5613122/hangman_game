import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num:0
        }
    }

    handelState(e){
        var temp = Math.floor(Math.random()*11);
        this.setState({
            num: temp,
        });
    }

    render(){
        return(
            <div>
                <h1><center>Number is: {this.state.num}</center></h1>
                <h1 hidden={this.state.num !== 7}> You win!! <center>{}</center></h1>
                <center><button hidden={this.state.num === 7} onClick={()=>this.handelState()}>Click</button></center>
            </div>
        )
    }
}

const root = document.getElementById("root");

ReactDOM.render(<Index />,root);