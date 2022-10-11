import { Component } from "react";

class Mode extends Component{
    state = {light:false}
    ColorChange=() =>{
        this.setState((prevState)=>({light:!prevState.light}))
        
    }
    renderColor = () =>{
        const {light} = this.state
        if(light === true)
        {
            return <button className="button" onClick={this.ColorChange}> Light</button>
        }else{
           return  <button className="button" onClick={this.ColorChange}>Dark</button>
        }
    }
    render(){
        return(
            <div className="main-conatiner">
                <div className={this.state.light=== true?"main":"dark-main"}>
                    <h4 className={this.state.light=== true?"heading":"dark-heading"}>Click To Chnage Mode</h4>
                    {this.renderColor()}
                </div>
            </div>
        )
    }
}

export default Mode