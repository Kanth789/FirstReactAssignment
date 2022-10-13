import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Tabs from './components/Index';
import DisplayApp from './components/DisplayApp';
const AppStore = [
  {
    uniqueNo:1,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Facebook",
    caterogyId:"social"
  },
  {
    uniqueNo:2,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Instagram",
    caterogyId:"social"
  },
  {
    uniqueNo:3,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Youtube",
    caterogyId:"social"
  },
  {
    uniqueNo:4,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"TikTok",
    caterogyId:"social"
  },
  {
    uniqueNo:5,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Resso",
    caterogyId:"social"
  },
  {
    uniqueNo:6,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Facebook",
    caterogyId:"Games"
  },
  {
    uniqueNo:7,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Instagram",
    caterogyId:"Games"
  },
  {
    uniqueNo:8,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Youtube",
    caterogyId:"Games"
  },
  {
    uniqueNo:9,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"TikTok",
    caterogyId:"Games"
  },
  {
    uniqueNo:10,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Resso",
    caterogyId:"Games"
  },
  {
    uniqueNo:11,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Facebook",
    caterogyId:"News"
  },
  {
    uniqueNo:12,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Instagram",
    caterogyId:"News"
  },
  {
    uniqueNo:13,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Youtube",
    caterogyId:"News"
  },
  {
    uniqueNo:14,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"TikTok",
    caterogyId:"News"
  },
  {
    uniqueNo:15,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Resso",
    caterogyId:"News"
  },
  {
    uniqueNo:16,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Youtube",
    caterogyId:"Food"
  },
  {
    uniqueNo:17,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"TikTok",
    caterogyId:"Food"
  },
  {
    uniqueNo:18,
    imgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Resso",
    caterogyId:"Food"
  }

]
const TabsList = [
  {
    uniqueNo:1,
    name:"Socail",
    caterogyId:"social"
  },
  {
    uniqueNo:2,
    name:"Games",
    caterogyId:"Games"
  },
  {
    uniqueNo:3,
    name:"News",
    caterogyId:"News"
  },
  {
    uniqueNo:4,
    name:"Food",
    caterogyId:"Food"
  }
]
class App extends Component
{
  state={
    searchInputValue : '',
    SelectedCaterogyId : "social"
  }
  OnStateUpdate = (caterogyId) =>{
    this.setState({SelectedCaterogyId:caterogyId})
  }
  onChange = event =>{
    this.setState({
      searchInputValue : event.target.value
    })
  }
  OnclickedTabApp = (caterogyId) =>{
    
    const filterAppStore = AppStore.filter((eachItem) => eachItem.caterogyId === this.state.SelectedCaterogyId)
    return filterAppStore
  }
 
  render(){
    const {searchInputValue,SelectedCaterogyId} = this.state
    const searchResult = this.OnclickedTabApp().filter((eachItem) => eachItem.name.toLowerCase().includes(searchInputValue.toLowerCase()))
    return(
     
      <div className='main-conatiner'>
       <div className='main'>
        <div className='header'>
          <h3>App Store</h3>
        </div>
        <div className='searchInput'>
          <input type="search" onChange={this.onChange}></input>
        </div>
        <div className='tabs'>
          {TabsList.map(eachItem=>(<Tabs OnclickedTabApp={this.OnStateUpdate} TabsList={eachItem} key={eachItem.uniqueNo}/>))}
        </div>
        <div className='app-conatiner'>
        {searchResult.map(eachItem=>(<DisplayApp  AppStore={eachItem} key={eachItem.uniqueNo}/>))}
        </div>
       </div>
      </div>
    )
  }
}
export default App;
