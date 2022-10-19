import logo from './logo.svg';
import './App.css'; 
import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import Question from './Components/Question';
const QuestionList = [
  {
     uniqueNo: uuidv4(),
     question:"What is IRC?",
     Answers:"IRC is a Industry Ready Certification taht represents your readiness for a job"
  },
  {
    uniqueNo:uuidv4(),
    question:'What is the medium of instruction?',
    Answers:"Medium of Instruction Type defines the media through which teachers provide instruction "
  },
  {
    uniqueNo:uuidv4(),
    question :'Why React ?',
    Answers:"React is a JavaScript library developed by Facebook which, among other things, was."
  },
  {
    uniqueNo:uuidv4(),
    question:"React is library or frameWork?",
    Answers:"React goes beyond just being a UI framework; it contains many extensions that cover . "
  },
  {
    uniqueNo: uuidv4(),
    question:"What is IRC?",
    Answers:"IRC is a Industry Ready Certification taht represents your readiness for a job"
 },
 {
   uniqueNo:uuidv4(),
   question:'What is the medium of instruction?',
   Answers:"Medium of Instruction Type defines the media through which teachers provide instruction "
 },
]
class App extends Component{
  render(){
    return(
      <div className='main-conatiner'>
        <div className='main'>
          <div className='header'>
            <h3 className='heading'>FAQ's</h3>
          </div>
          <div className='question-conatiner'>
            {QuestionList.map(eachItem =>(<Question key={eachItem.uniqueNo} FaqQuestion={eachItem}/>))}
          </div>
        </div>
      </div>
    )
  }
}
export default App;
