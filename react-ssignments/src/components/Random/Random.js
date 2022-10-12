import { Component } from "react";

class Random extends Component{
    state = {num:0}
    Generate = () =>{
        this.setState((prevState)=>({num:Math.floor(Math.random() * 100)}));
    }
    render(){
        const{num} = this.state
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header">
                        <h3>Random Number</h3>
                    </div>
                    <div className="para">
                        <p>Generate a random number in the range of 0 to 100</p>
                    </div>
                    <div className="button">
                        <button onClick={this.Generate}>Generate</button>
                    </div>
                    <div className="randomnumber">
                        <h3>{num}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
export default Random