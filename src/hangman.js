import React from "react";
import word from "./word.js"
import "./hangman.css";

let rand,len,wording;
class Hangman extends React.Component{
    static defaultProps = {
        arr:[
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
            'p','q','r','s','t','u','v','w','x','y','z'
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            alpha:this.assign(),
            wrong:0,
            right:0,
        }
    };

    
    assign(){
        rand = Math.floor(Math.random()*word.length);
        len = word[rand].length;
        wording = word[rand].toLowerCase();
        var i,a = [];
        for(i=0;i<len;i++){
            a[i] = '__';
        };
        return a;
    }
    
    handel(button_alpha){
        if(this.state.wrong !== 6){
            var words = wording;
            var idx=-1;
            for(var i=0;i<len;i++)
            {
                if(button_alpha === words[i])
                {
                    idx = i;
                    break;
                }
            }
            if(idx === -1)
            {
                this.setState(()=>({
                    alpha:[...this.state.alpha],
                    wrong:this.state.wrong + 1,
                    right:this.state.right,
                }))
            }
            else{
                const temp = [...this.state.alpha];
                var cnt=0;
                for(i=0;i<len;i++)
                {
                    if(button_alpha === words[i] && temp[i] === '__')
                    {
                        temp[i] = button_alpha;
                        cnt++;
                    }   
                }
                this.setState(()=>({
                    alpha:temp,
                    wrong:this.state.wrong,
                    right:this.state.right + cnt,
                }))
            }
        }
    }
    render(){
        return(
            <div>
                <h1>Hangman Game</h1>
                <img className="logo" src={require(`./hangman/${this.state.wrong}.jpg`).default} alt={this.state.wrong}/>
                <ul hidden={this.state.wrong === 6} className="alpha">
                    {this.state.alpha.map(m=> 
                        <li>{m}</li>
                    )}
                </ul>
                <h1 hidden={this.state.right !== len}>Congrats! You Won.  Reload... to play again!</h1>
                <h1 hidden={this.state.wrong !== 6}>Game Over! Reload... to play again!</h1>
                <div className="butt">
                {this.props.arr.map((a,index)=>
                    <button disabled={this.state.wrong === 6} key={index} onClick={()=>this.handel(a)}>{a}</button>
                )}
                </div>
            </div>
        )
    }
}

export default Hangman;