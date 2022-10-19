/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Password from './components/Password';

const PasswordList = []
const colorClassName = ['red','yellow','green','blue']

class App extends Component {
  state = {
    statePasswordList: PasswordList,
    website: '',
    username: '',
    password: '',
    isShowButton: false,
    searchInput: ''
  }
  Onchangewebsite = (event) => {
    this.setState({ website: event.target.value })
    console.log(event.target.value)
  }
  Onchangeusername = (event) => {
    this.setState({ username: event.target.value })
    console.log(event.target.value)
  }
  OnchangePassword = (event) => {
    this.setState({ password: event.target.value })
    console.log(event.target.value)
  }
  
  onAddPassword = (event) => {
    const randomColorName = colorClassName[Math.floor(Math.random() * colorClassName.length)];
    event.preventDefault()
    const { website, username, password } = this.state
    console.log(this.state)
    const newPassword = {
      uniqueNo: uuidv4(),
      website,
      username,
      password,
      colorName:randomColorName,
      isShowButton: false
    }
    this.setState(prevState => ({
      statePasswordList: [...prevState.statePasswordList, newPassword],
      website: '',
      username: '',
      password: ''
    }))
  }
  Onchecked = () => {
    console.log(1123)
    this.setState(prevState => ({ isShowButton: !prevState.isShowButton }))


  }
  onSearchInput = (event) => {

    this.setState({ searchInput: event.target.value })
  }
  onDeleteApp = (uniqueNo) => {
    const { statePasswordList } = this.state
    const filteredData = statePasswordList.filter(eachItem => eachItem.uniqueNo !== uniqueNo)
    this.setState({ statePasswordList: filteredData })
  }
  render() {

    const { statePasswordList, website, username, password, isShowButton, searchInput } = this.state
    const searchResult = statePasswordList.filter((eachItem) => eachItem.website.toLowerCase().includes(searchInput.toLowerCase()))
    return (
      <div className='main-conatiner'>
        <div className='main'>
          <div className='logo'>
            <img src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' />
          </div>
          <div className='first-Conatiner'>
            <div className='form-conatiner'>
              <form onSubmit={this.onAddPassword}>
                <label>Add New Password</label>
                <input value={website} type="text" onChange={this.Onchangewebsite} placeholder='Enter the Website...'></input>
                <input value={username} type="text" onChange={this.Onchangeusername} placeholder='Enter the UserName...'></input>
                <input value={password} type="password" onChange={this.OnchangePassword} placeholder='Enter the Website..'></input>
                <button >Add</button>
              </form>
            </div>
            <div className='first-image'>
              <img src='https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png' />
            </div>
          </div>
          <div className='second-conatiner'>
            <div className='second-header'>
              <div className='header'>
                <h3>Your Password<span>{statePasswordList.length}</span></h3>
              </div>
              <div className='header-input'>
                <input type="text" onChange={this.onSearchInput}></input>
              </div>
             
            </div>
            <hr></hr>
            <div className='checkBox'>
              <input type="checkbox" onClick={this.Onchecked} value="password" />
              <label> Show Password</label>
            </div>
            <div className='passwords-conatiner'>
              {searchResult.map(eachItem => (<Password key={eachItem.uniqueNo} PropPassword={eachItem} isShowButton={isShowButton} onDeleteApp={this.onDeleteApp} />))}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
