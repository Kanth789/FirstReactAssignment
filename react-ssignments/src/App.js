/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import Password from './components/Password';
const PasswordList = []

class App extends Component{
  state={
     statePasswordList : PasswordList,
     website:'',
     username:'',
     password:'',
     isShowButton: false
  }
  Onchangewebsite = (event)=>{
     this.setState({website:event.target.value})
     console.log(event.target.value)
  }
  Onchangeusername = (event)=>{
     this.setState({username:event.target.value})
     console.log(event.target.value)
  }
  OnchangePassword = (event) =>{
    this.setState({password:event.target.value})
    console.log(event.target.value)
  }
  onAddPassword = (event)=>{
    event.preventDefault() 
    const {website,username,password} = this.state
    console.log(this.state)
    const newPassword = {
      uniqueNo: uuidv4(),
      website,
      username,
      password,
      isShowButton:false
    }
    this.setState(prevState=>({statePasswordList:[...prevState.statePasswordList,newPassword],
      website:'',
      username:'',
      password:''
    }))
  }
  Onchecked = () =>{
      const{isShowButton,password,statePasswordList} = this.state
      this.setState(prevState=>({isShowButton:!prevState.isShowButton}))
      // eslint-disable-next-line no-undef
     
      
  }
  onDeleteApp = (uniqueNo) =>{
    const {statePasswordList} = this.state
    const filteredData = statePasswordList.filter(eachItem =>eachItem.uniqueNo !== uniqueNo)
    this.setState({statePasswordList:filteredData})
  }
  render(){
    const searchResult = statePasswordList.filter((eachItem) => eachItem.username.toLowerCase().includes(.toLowerCase()))
    const{statePasswordList,website,username,password,isShowButton} = this.state
    return(
      <div className='main-conatiner'>
        <div className='main'>
          <div className='logo'>
            <img src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'/>
          </div>
          <div className='first-Conatiner'>
            <div className='form-conatiner'>
              <form  onSubmit={this.onAddPassword}>
                <label>Add New Password</label>
                <input value={website} type="text"  onChange={this.Onchangewebsite} placeholder='Enter the Website...'></input>
                <input value={username} type="text" onChange={this.Onchangeusername} placeholder='Enter the UserName...'></input> 
                <input  value={password} type="password" onChange={this.OnchangePassword} placeholder='Enter the Website..'></input>
                <button >Add</button>
              </form>
            </div>
            <div className='first-image'>
              <img src='https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'/>
            </div>
          </div>
          <div className='second-conatiner'>
            <div className='second-header'>
              <div className='header'>
                <h3>Your Password<span></span></h3>
              </div>
              <div className='header-input'>
              <input type="text"></input>
              </div>
              
            </div>
            <div className='checkBox'>
            <input type="checkbox" onClick={this.Onchecked} value="password"/>
            <label> Show Password</label>
            </div>
            <div className='passwords-conatiner'>
              {statePasswordList.map(eachItem=>(<Password key={eachItem.uniqueNo} PropPassword={eachItem} OncheckedButton={this.isShowButton} onDeleteApp = {this.onDeleteApp}/>))}
              </div>
             
          </div>
        </div>
      </div>
    )
  }
}

export default App;
