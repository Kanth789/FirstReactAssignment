import { Component } from "react";

class EvenOdd extends Component{
    state = {num : 0 }
    
    randomNumber = () =>{
        this.setState((prevState)=> ({num:Math.floor(Math.random() * 100)}));
       
        
    }
    
    render(){
        
        const{num} = this.state
        return(
           <div className="main-conatiner">
            <div className="Header">
                <h2 className="heading">Count: {num}</h2>
            </div>
            <div className="para"><p>Count is : {this.state.num%2===0?"even":"odd"} </p></div>
            <button onClick={this.randomNumber}>Increment</button>
           </div> 
        )
    }
}
export default EvenOdd