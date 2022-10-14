import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const TabsList = [
  {
    uniqueNo:1,
    Name:"Total",

    
  },
  {
    uniqueNo:2,
    Name:"Heads",
    imgUrl:"https://i.ibb.co/bvdsr2w/Screenshot-from-2022-10-14-12-38-37.png"
    
  },
  {
    uniqueNo:3,
    Name:"Tails",
    imgUrl:"https://i.ibb.co/BtkV0dd/Screenshot-from-2022-10-14-12-37-35.png"
    
  }
]

let TossList = ["Heads","Tails"]

class App extends Component{
  state ={
    stateUrl:"https://i.ibb.co/bvdsr2w/Screenshot-from-2022-10-14-12-38-37.png",
    HeadsCount:1,
    TailsCount:0
  }
  Onclicked = () =>{
      let TossRandom = TossList[Math.ceil(Math.random() * TossList.length) - 1]

    const ImgUpdate = TabsList.find((eachImage)=>eachImage.Name === TossRandom)
    this.setState({stateUrl:ImgUpdate.imgUrl})
    if(ImgUpdate.Name === "Heads"){
    this.setState((prevState)=>({...prevState,HeadsCount:prevState.HeadsCount  + 1}))
    }else{
    this.setState((prevState)=>({...prevState,TailsCount:prevState.TailsCount  + 1}))
  }
}
  render()
  {
    
    const{stateUrl,HeadsCount,TailsCount} = this.state
    return(
      <div className='main-conatiner'>
        <div className='main'>
          <div className='header'>
            <h3 className='heading'>Coin Toss Game</h3>
          </div>
          <div className='para'>
            <p>Heads (or) Tails</p>
          </div>
          <div className='image-Conatiner'>
            <img src={stateUrl}></img>
          </div>
          <div className='button-conatiner'>
            <button onClick={this.Onclicked}>Toss Coin</button>
          </div>
          <div className='Tabs'>
            <div className='tab1'>
              <p>Total:<span>{HeadsCount + TailsCount}</span></p>
            </div>
            <div className='tab1'>
              <p>Heads:<span>{HeadsCount}</span></p>
            </div>
            <div className='tab1'>
              <p>Tails:<span>{TailsCount}</span></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
