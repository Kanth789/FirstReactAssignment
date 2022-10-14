import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Tabs from './components/Index';
import DisplayApp from './components/DisplayApp';
const AppStore = [
  {
    uniqueNo:1,
    imgUrl:"https://img.icons8.com/fluency/344/facebook-new.png",
    name:"Facebook",
    caterogyId:"social"
  },
  {
    uniqueNo:2,
    imgUrl:"https://img.icons8.com/color/344/instagram-new--v1.png",
    name:"Instagram",
    caterogyId:"social"
  },
  {
    uniqueNo:3,
    imgUrl:"https://img.icons8.com/color/344/youtube-play.png",
    name:"Youtube",
    caterogyId:"social"
  },
  {
    uniqueNo:4,
    imgUrl:"https://img.icons8.com/3d-fluency/344/tiktok.png",
    name:"TikTok",
    caterogyId:"social"
  },
  {
    uniqueNo:5,
    imgUrl:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-resso-application-for-android-and-ios-devices-for-music-listening-and-streaming-music-color-tal-revivo.png",
    name:"Resso",
    caterogyId:"social"
  },
  {
    uniqueNo:6,
    imgUrl:"https://img.icons8.com/color/344/subway-surfers.png",
    name:"Subway-surfers",
    caterogyId:"Games"
  },
  {
    uniqueNo:7,
    imgUrl:"https://img.icons8.com/external-those-icons-lineal-color-those-icons/344/external-angry-birds-video-games-those-icons-lineal-color-those-icons.png",
    name:"Angry-birds",
    caterogyId:"Games"
  },
  {
    uniqueNo:8,
    imgUrl:"https://img.icons8.com/bubbles/344/temple-run.png",
    name:"Temple-run",
    caterogyId:"Games"
  },
  {
    uniqueNo:9,
    imgUrl:"https://img.icons8.com/cute-clipart/344/hill-descent-control.png",
    name:"Hill-Climb",
    caterogyId:"Games"
  },
  {
    uniqueNo:10,
    imgUrl:"https://img.icons8.com/color/344/jerry.png",
    name:"jerry",
    caterogyId:"Games"
  },
  {
    uniqueNo:11,
    imgUrl:"https://img.icons8.com/cute-clipart/344/inshorts.png",
    name:"Inshorts",
    caterogyId:"News"
  },
  {
    uniqueNo:12,
    imgUrl:"https://img.icons8.com/bubbles/344/news.png",
    name:"Google News",
    caterogyId:"News"
  },
  {
    uniqueNo:13,
    imgUrl:"https://img.icons8.com/ios-filled/344/bbc-logo.png",
    name:"BBC News",
    caterogyId:"News"
  },
  {
    uniqueNo:14,
    imgUrl:"https://img.icons8.com/doodle/344/swiggy.png",
    name:"Swiggy",
    caterogyId:"Food"
  },
  {
    uniqueNo:15,
    imgUrl:"https://img.icons8.com/ios-filled/344/zomato-logo.png",
    name:"Zomato",
    caterogyId:"Food"
  },
  {
    uniqueNo:16,
    imgUrl:"https://img.icons8.com/bubbles/344/zepeto.png",
    name:"Zepto",
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
        <div className='img-icon'>
        <img src='https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'></img>
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
