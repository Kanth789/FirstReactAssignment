import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route ,Switch,Redirect} from "react-router-dom" ;
import Login from './Components/Login/Login';
import ProctetedRoute from './Components/Protected';
import Home from './Components/Home/Home';
import { Component } from 'react';
import ToggleContext from './Components/ToggleContext';
import Navbar from './Components/Navbar/Navbar';
import ParticluarVideoDeatils from './Components/ParticluarVideoDeatils';
import Leftbar from './Components/Leftbar';
import Saved from './Components/SavedRoute/Saved';
import Trending from './Components/Trending/Trending';
import Gaming from './Components/Gaming/Gaming';
const Caterogy = [
  {
      uniqueId:'Home',
      name:'Home',
      icon:'AiOutlineHome'
  },
  {
      uniqueId:'Trending',
      name:'Trending',
      icon:'AiOutlineFire'
  },
  {
      uniqueId:"Gaming",
      name:"Gaming",
      icon:'SiYoutubegaming'
  },
  {
      uniqueId:"Saved",
      name:"Saved videos",
      icon:'MdPlaylistAdd',
  }
]
class  App extends Component {
  state ={
    showtoggleButton: true,
    savedData:[],
    
  }
  
  addVideoItem = particluarVideo => {
    const {savedData} = this.state
    const videoObject = savedData.find(
      eachItem => eachItem.id === particluarVideo.id,
    )

    if (videoObject) {
      this.setState(prevState => ({
        savedData: prevState.savedData.map(eachItem => {
          if (videoObject.id !== eachItem.id) {
            

            return {...eachItem}
          }

          return eachItem
        }),
      }))
    } else {
      const updatedVideoList = [...savedData, particluarVideo]

      this.setState({savedData: updatedVideoList})
    }
  }

  onClickedToggle = () =>{
   
    this.setState(prevState=>({showtoggleButton:!prevState.showtoggleButton}))
   
  }
  render(){
    const {showtoggleButton,savedData} = this.state
  return (
    <BrowserRouter>
    
    <ToggleContext.Provider  value={{onClickedToggle:this.onClickedToggle,showtoggleButton,savedData,addVideoItem:this.addVideoItem}}>
      
      <div className='App-conatiner'>
        <Navbar/>
        <div className='main-conatiner'>
        <  div className={`left-bar ${showtoggleButton ? "light-theme  " : "dark-theme"}`}>
                            {Caterogy.map(eachItem=>(<Leftbar  key={eachItem.uniqueId} leftbarLinks={eachItem} OnclickedLeftbarLink={this.OnclickedLeftbarLink}/>))}
                        </div>
                        
      <Switch>
      <Route exact path="/login" component={Login}></Route>
       <Route exact  path="/Saved" component={Saved}></Route>
       <Route exact path="/Gaming" component={Gaming}></Route>
       <Route exact path="/Trending" component={Trending}></Route>
       <Route exact path="/Home" component={Home}></Route>
      <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
      <ProctetedRoute exact path="/videos/:id" component={ParticluarVideoDeatils}></ProctetedRoute>
      <Redirect to="not-found" />
    </Switch>
    </div>
    
    </div>
    </ToggleContext.Provider>
 </BrowserRouter>
  )
}
}

export default App;