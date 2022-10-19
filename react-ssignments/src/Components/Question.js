import { Component } from "react";
import FaqAnswer from "./FaqAnswer";

const addImageUrl ="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
const minusImageUrl = "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
class Question extends Component{
    state = {
        isActive:false
    }
    toggleAnswers = ()=>{
        this.setState(prevState =>({isActive:!prevState.isActive}))
    }
    renderImge = ()=>{
        const{isActive} = this.state
        const Imgsrc = isActive ?  minusImageUrl :addImageUrl
        return(
            <button onClick={this.toggleAnswers}><img src={Imgsrc}/></button>
        )
    }
    renderAnswer = ()=>{
        const {FaqQuestion} = this.props 
        const {Answers} = FaqQuestion
        const{isActive} = this.state
        if(isActive)
        {
            return(
                <div className="answer-conatiner">
                    <hr></hr>
                    <FaqAnswer answers={Answers}/>
                </div>
            )
        }
    }
    render(){
        const {FaqQuestion} = this.props 
        const {question} = FaqQuestion
        const{isActive} = this.state
        return(
            <>
            <div className="questions">
            <div className="questions-conatiner">
                <h2>{question}</h2>
                {this.renderImge()}
                </div>
                
                
                {this.renderAnswer()}
            </div>
           
            </>
        )
    }

}
export default Question
