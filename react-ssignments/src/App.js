import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CaptialApp from './Components/CaptialApp';
const CaptialList = [
  {
    uniqueNo:1,
    Country:"India",
    Capital:"New Delhi"
  },
  {
    uniqueNo:2,
    Country:"France",
    Capital:"Paris"
  },
  {
    uniqueNo:3,
    Country:"Japan",
    Capital:"Tokyo"
  },
  {
    uniqueNo:4,
    Country:"United Kingdom",
    Capital:"London"
  }
]
class App extends Component{
  state ={
    isSelected : CaptialList[0].uniqueNo
  }
  
   textChange(){
    
    const FindCountry = CaptialList.find(eachItem => eachItem.uniqueNo === this.state.isSelected)
    return FindCountry.Country
   } 
   OnSelect = (event) =>{
     let place = event.target.value;
     const UpdateCountry = CaptialList.find(eachItem => eachItem.Capital === place)
     this.setState({isSelected:UpdateCountry.uniqueNo})
   }
  render(){
    
    return(
      <div className='main-conatiner'>
        <div className='main'>
          <div className='header'>
            <h4>Countries And Capital</h4>
          </div>
          <div className='DropDown'>
          <select name="captial" id="captial" onChange={this.OnSelect}>
            {CaptialList.map(eachItem =>(<CaptialApp CaptialList={eachItem} key={eachItem.uniqueNo}/>))}
            </select>
          <label for="Capitals">is capital of which country?</label>
          </div>
          <div className='optionValue'>
            <h3>{this.textChange()}</h3>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
