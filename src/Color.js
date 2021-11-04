import React from "react";
import Box from "./box.js";

class Color extends React.Component{

    render(){
        
        return(
            <div>
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
                <Box c={Math.floor(Math.random() * 8)} />
            </div>
        )
    }
}

export default Color;