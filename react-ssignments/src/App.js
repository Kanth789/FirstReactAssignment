import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {v4 as uuidv4} from 'uuid'
import UserHistory from './components/UserHistory';

const InitialTransactionList = [

  {
    unqiueNo:uuidv4(),
    name:"Your Balance",
    imgUrl:"",
    Income:'',
    Expennses:''
   
  },
  {
    unqiueNo:uuidv4(),
    name:"Your Income",
    imgUrl:"",
    Income:'',
    Expennses:''
   
  },
  {
    unqiueNo:uuidv4(),
    name:"Your Expenses",
    imgUrl:"",
    Income:'',
    Expennses:''
  }
]


class App extends Component{
  state ={
    IncomeList :InitialTransactionList ,
    Title:'',
    Count:'',
    type:'',
   
    
  }
  onAddComment = (event) =>{
    
    event.preventDefault()
    const {Title, Count,type} = this.state
    const newComment = {
      uniqueid: uuidv4(),
      Title,
      Count,
      type,
     
    }
    this.setState(prevState => ({
      IncomeList: [...prevState.IncomeList, newComment],
      Title:'',
      Count:'',
      type:'',
      
      
    }))
    
  }
  
  onChangeName = (event) =>{
    this.setState({Title:event.target.value})
  }
  onChangeAmount = (event) =>{
    this.setState({Count:event.target.value})
  }
  onChangeType = (event) =>{
    this.setState({type:event.target.value})
    console.log(event.target.value)
  }
  
  render(){
    const {IncomeList,Title,Count,type} = this.state
    return(
      
      <div className='main-conatiner'>
        <div className='main'>
          <div className='header'>
            <div className='header-title'>
              <h3>Hi,Kiran Kanth</h3>
            </div>
            <div className='header-para'>
              <p>Welcome,back to your<span>Money Manager</span></p>
            </div>
            <div className='Balance-tabs'>
            
            
            </div>
            <div className='form-conatiner'>
              <div className='form-header'>
                <h3>Add Transaction</h3>
              </div>
              <form className="contact-form-container" onSubmit={this.onAddComment}>
            <label>Title</label>
            <input
              value={Title}
              onChange={this.onChangeName}
              className="input"
              placeholder="Ttile"
            />
            <input
              value={Count}
              onChange={this.onChangeAmount}
              className="input"
              placeholder="Amount"
            />
            <select name="type" onChange={this.onChangeType} >
            {/* {TabList.map(eachItem=>(<Selection key={eachItem.unqiueNo} TabList={eachItem}/>))} */}
            <option value="select">Select</option>
            <option value="Income">Income</option>
            <option value="Expenses">Expenses</option>
            </select>
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <div className='History-conatiner'>
            <div className="History-header">
              <h3>History</h3>
            </div>
            <div className='History-tabs'>
              <div className='Tabs'>
                <div><h4>Title</h4></div>
                <div><h4>Amount</h4></div>
                <div><h4>Type</h4></div>
                <div><h4>Delete</h4></div>
              </div>
              <div className='User-history'>
              {IncomeList.map(eachItem=>(<UserHistory key={eachItem.unqiueNo} IncomeList={eachItem}/>))}
              </div>
            </div>
          </div>
            </div> 
              </div>
            </div>
          </div>
       
    )
  }
}

export default App;
