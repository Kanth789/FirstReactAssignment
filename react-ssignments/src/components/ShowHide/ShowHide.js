import { Component } from "react";

class ShowHide extends Component{
    state = {btnClicked:true}
    Display = () =>{
        this.setState ((prevState)=>({btnClicked:!prevState.btnClicked}))

    }
render(){
    const {btnClicked} = this.state
    const {buttonDetails} = this.props
    return(
        
            <div className="button">
                <button className="btn1" onClick={this.Display}>{buttonDetails.ButtonName}</button>
                { btnClicked ?<div className="btn1-content">{buttonDetails.content}</div> :null}
                
            </div>
       
    )
}
}

export default ShowHide