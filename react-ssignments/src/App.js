import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Clock from './components/clock';
class App extends Component{
  state = {
    showClock : false,
  }
  onToggleClock = () =>{
    this.setState(prevState =>{
      const{showClock} = prevState
      return{
        showClock:!showClock,
      }
    })
  }
  render(){
    const{showClock} = this.state
    return(
      <div className='app-conatiner'>
        <button type='button' onClick={this.onToggleClock}className='toggle-buton'>{showClock ? 'Hide Clock':'Show Clock'}</button>
      {showClock && <Clock/>}
      </div>
    )
  }
}
export default App;
