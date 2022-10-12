import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import GoogleSearch from './components/GoogleSearch/GoogleSearch';

const GoogleList = [
  {
    uniqueNo:1,
    content:"Function Component"
  },
  {
    uniqueNo:2,
    content:"Class Component"
  },
  {
    uniqueNo:3,
    content:"Fastrack"
  },
  {
    uniqueNo:4,
    content:"Roadster"
  },
  {
    uniqueNo:5,
    content:"HighLander"
  },
  {
    uniqueNo:6,
    content:"Mast & Habour"
  },
]
 class App extends Component{
  state = {
    searchInput:''
  }
  onChange = event =>{
    this.setState({
      searchInput : event.target.value
    })
  }
  onHighlightApp = uniqueNo =>{
    const filterData = GoogleList.find(eachItem => eachItem.uniqueNo === uniqueNo)
    console.log(filterData)
      this.setState({searchInput:filterData.content})
  }
  // onHighlightApp = content => {
  //   const {searchInput} = this.state
  //   this.setState({searchInput:content})
  // }
  render(){
    const {searchInput} = this.state
    const searchResult = GoogleList.filter((eachItem) => eachItem.content.toLowerCase().includes(searchInput.toLowerCase()))
    return(
      <div className='main-conatiner'>
        <div className='image'>
        <img src='https://assets.ccbp.in/frontend/react-js/google-logo.png '></img>
        </div>
        <div className='main-box'>
        <div className='searchInput'>
        <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "></img>
          <input type="search" value={searchInput} onChange = {this.onChange} placeholder="Enter here ..."></input>
        </div>
        <div className="box">
          { searchResult.map(eachItem =>
            (<GoogleSearch  onHighlightApp={this.onHighlightApp}GoogleList={eachItem} key={eachItem.uniqueNo}/>
          ))}
        </div>
      </div>
      </div>
    )
  }
 }

export default App;
