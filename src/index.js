import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello from my side!!</h1>
            </div>
        )
    }
}

const root = document.getElementById("root");

ReactDOM.render(<Index />,root);