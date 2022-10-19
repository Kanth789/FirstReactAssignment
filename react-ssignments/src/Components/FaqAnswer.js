import { Component } from "react";

class FaqAnswer extends Component{
render(){
    const{answers} = this.props;
    return(
        <div className="answer">
            <p className="answer-para">{answers}</p>
        </div>
    )
}
}
export default FaqAnswer