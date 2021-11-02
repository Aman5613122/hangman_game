import React from "react";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dice_num1:0,
            dice_num2:1,
        }
    }

    handelState(e){
        var dice1 = Math.floor(Math.random()*6);
        var dice2 = Math.floor(Math.random()*6);
        this.setState({
            dice_num1:dice1,
            dice_num2:dice2,
        });
    }

    render(){
        var a = ['one','two','three','four','five','six'];
        var link1 = `fas fa-dice-${a[this.state.dice_num1]}`;
        var link2 = `fas fa-dice-${a[this.state.dice_num2]}`;
        return(
            <div>
                <i className={link1}></i>
                <i className={link2}></i>
                <h1><center>Number is: {this.state.num}</center></h1>
                <h1 hidden={this.state.dice_num2 !== this.state.dice_num1}> You win!! <center>{}</center></h1>
                <center><button onClick={()=>this.handelState()}>Click</button></center>
            </div>
        )
    }
}

export default App;