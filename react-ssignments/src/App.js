import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SubmitFeedBack from './components/FeedBack/SubmitFeedBack';
import FeedBack from './components/FeedBack/FeedBACK.js';
const ImageList = [
  {
    uniqueNo:1,
    name:"Sad",
    imgUrl:"https://i.ibb.co/RPrfBcX/Screenshot-from-2022-10-13-12-26-29.png"
  },
  {
    uniqueNo:2,
    name:"None",
    imgUrl:"https://i.ibb.co/pyTw8th/Screenshot-from-2022-10-13-12-26-47.png"
  },
  {
    uniqueNo:3,
    name:"Happy",
    imgUrl:"https://i.ibb.co/Jpy4Q10/Screenshot-from-2022-10-13-12-27-14.png"
  }
]

class App extends Component{
  state = {
    IsFeedBackSubmit :false

  }
  OnsubmitedApp = () =>{
     this.setState((prevState)=>({IsFeedBackSubmit:!prevState.IsFeedBackSubmit}))
      
  }
  render(){
    const {IsFeedBackSubmit}=this.state
    return(
      <div className='main-conatiner'>
        <div className='main'>
          <div className='header'>
            <h4 className='heading'>How satisfied are you with our <br></br>customer support performance</h4>
          </div>
          {IsFeedBackSubmit?<FeedBack/>:<div className='img-conatiner'>
            {ImageList.map(eachItem=>(<SubmitFeedBack  OnsubmitedApp={this.OnsubmitedApp}ImageList={eachItem} key={eachItem.uniqueNo}/>))}
          </div> }
        </div>
      </div>
    )
  }
}

export default App;
