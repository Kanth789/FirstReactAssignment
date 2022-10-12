import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CashWithdrawal from './components/CashWithdrawal';
const CashList =[
  {
    uniqueNo:1,
    number:50
  },
  {
    uniqueNo:2,
    number:100
  },
  {
    uniqueNo:3,
    number:200
  },
  {
    uniqueNo:4,
    number:500
  }
]

class App extends Component{
  state = { 
    total:2000
  }
  OnclickedApp = number =>{
    this.setState((prevState)=>({total:prevState.total - number}))
  }
  render(){
    const {total} = this.state
    return(
      <div className='main'>
      <div className='main-conatiner'>
        <div className='main-header'>
          <div className='circle'></div>
          <div className='user-name'>Sarah Williams</div>
        </div>
        <div className='mid-conatiner'>
          <div className='one'><h5>Your Balance</h5></div>
          <div className='two'><h5>{total}</h5></div>
        </div>
        <div className='rupees'><p>In Rupees</p></div>
        <div className='withdraw'><h3>Withdraw</h3></div>
        <div className='money'><h5>CHOOSE SUM(IN RUPEES)</h5></div>
        <div className='button-box'>
          {CashList.map(eachItem=>(<CashWithdrawal OnclickedApp={this.OnclickedApp} CashList={eachItem} key={eachItem.uniqueNo}/>))}
        </div>
      </div>
      </div>
    )
  }
}
export default App;
