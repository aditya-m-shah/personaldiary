import React, {Component} from 'react';
import './Landing.css';

class Landing extends Component{
    constructor() {
        super();
        this.state = {
          title: 'I gotta analze what you got',
          placeholder:'Got some words.. let me munch numbers and see....'
        };
    }

render() {
   return(
       <div className="mainDiv">
            <textarea className="bigTextbox" placeholder={this.state.placeholder}/> <button></button><br />
            <button>I gotta a file, can you handle it?</button>
        </div> 
        );
    }    
} 

export default Landing;