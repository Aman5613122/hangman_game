import React from "react";
import "./color.css";

class Box extends React.Component{
    static defaultProps = {
        color:['red','green','blue','yellow','pink','grey','skyblue','purple'],
    }

    constructor(props){
        super(props);
        this.state = {
            color:this.props.color[this.props.c],
        }
    }

    handel(){
        let temp = Math.floor(Math.random() * 8);
        while(this.props.color[temp] === this.state.color)
        {
            temp = Math.floor(Math.random() * 8);
        }

        this.setState(()=>({
            color:this.props.color[temp],
        }))
    }

    render(){
        return(
            <section style={{backgroundColor:`${this.state.color}`}} onClick={()=> this.handel()} className="box"></section>
        );
    }
}

export default Box;