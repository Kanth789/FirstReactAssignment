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
import SocialMedia from './Components/SocialMedia';
import Cookies from 'js-cookie';
import {AiOutlineHome}  from "react-icons/ai";
import {AiOutlineFire} from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { MdPlaylistAdd } from "react-icons/md";
import Notfound from './Components/Notfound/Notfound';
const Caterogy = [
  {
      uniqueId:'Home',
      name:'Home',
      icon:<AiOutlineHome size={25}/>,
      imgUrl :'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png',
      altName:'face-book-icon'
  },
  {
      uniqueId:'Trending',
      name:'Trending',
      icon:<AiOutlineFire size={25}/>,
      imgUrl :'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png ',
      altName:'twitter-icon'
  },
  {
      uniqueId:"Gaming",
      name:"Gaming",
      icon:<SiYoutubegaming size={25}/>,
      imgUrl :'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png',
      altName:'likedIn-icon'
  },
  {
      uniqueId:"Saved",
      name:"Saved videos",
      icon:<MdPlaylistAdd size={25}/>,
  }
]

const getAccessToken =()=>{
  return Cookies.get('jwt_token')
}
class  App extends Component {
  state ={
    showtoggleButton: true,
    jwtaccesToken:'',
    savedVideos: [],
    likedVideos:[],
    DislikedVideo:[]
    
  }
  componentDidMount(){
    this.OnJwtTokken()
  }
  OnclickedSaved = () =>{
    this.setState(prevState=>({clickedSaved:!prevState.clickedSaved}))
}

toggleSavedvideo =  data => {
    
    const {savedVideos} = this.state
    if(savedVideos.find(eachItem=>eachItem.id === data.id)){
      this.setState(prevState=>({savedVideos:prevState.savedVideos.filter(eachItem=>eachItem.id !== data.id)}))
    }
    else{
      this.setState(prevState=>({savedVideos:[...prevState.savedVideos,data]}))
    }
  }
  toggleLikedvideo = data =>{
    const{likedVideos,DislikedVideo} = this.state 
    if(likedVideos.find(eachItem=>eachItem.id === data.id))
    {
      this.setState(prevState=>({likedVideos:prevState.likedVideos.filter(eachItem=>eachItem.id !== data.id)}))
    }else{
      this.setState(prevState=>({likedVideos:[...prevState.likedVideos,data]}))
    }
    if(DislikedVideo.find(eachItem=>eachItem.id === data.id)){
      this.setState(prevState=>({DislikedVideo:prevState.DislikedVideo.filter(eachItem=>eachItem.id !== data.id)}))
    }
  }
  toggleDislikedvideo = (data)=>{
    const{likedVideos,DislikedVideo} = this.state 
    if(DislikedVideo.find(eachItem=>eachItem.id === data.id))
    {
      this.setState(prevState=>({DislikedVideo:prevState.DislikedVideo.filter(eachItem=>eachItem.id !== data.id)}))
    }else{
      this.setState(prevState=>({DislikedVideo:[...prevState.likedVideos,data]}))
    }
    if(likedVideos.find(eachItem=>eachItem.id === data.id)){
      this.setState(prevState=>({likedVideos:prevState.likedVideos.filter(eachItem=>eachItem.id !== data.id)}))
    }
  }
  onClickedToggle = () =>{
   
    this.setState(prevState=>({showtoggleButton:!prevState.showtoggleButton}))
   
  }

  OnJwtTokken = () =>{
    console.log(getAccessToken()=== undefined)
    this.setState({jwtaccesToken:getAccessToken()})
  }
  renderRoute = () =>{
    return(
      <Switch>
      <Route exact path="/login" component={Login}></Route>
       <ProctetedRoute exact  path="/Saved" component={Saved}></ProctetedRoute>
       <ProctetedRoute exact path="/Gaming" component={Gaming}></ProctetedRoute>
       <ProctetedRoute exact path="/Trending" component={Trending}></ProctetedRoute>
       <Route exact path="/Home" component={Home}></Route>
      <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
      <ProctetedRoute exact path="/videos/:id" component={ParticluarVideoDeatils}></ProctetedRoute>
      <Route  path="/not-found" component={Notfound}></Route>
      <Redirect to="not-found" />
    </Switch>
    )
  }
  render(){
    const {showtoggleButton,savedData,jwtaccesToken,savedVideos,likedVideos,DislikedVideo} = this.state
   
    console.log(jwtaccesToken,"jwt token")
  return (
    <div className='app'>
    <BrowserRouter>
    
    <ToggleContext.Provider  value={{onClickedToggle:this.onClickedToggle,showtoggleButton,savedData,jwtaccesToken:this.OnJwtTokken, DislikedVideo,likedVideos,savedVideos,toggleSavedvideo: this.toggleSavedvideo,toggleLikedvideo:this.toggleLikedvideo,toggleDislikedvideo:this.toggleDislikedvideo}}>
      
      <div className='App-conatiner'>
       {jwtaccesToken === undefined || null ?    "" : <Navbar/>}
        <div className='main-conatiner'>
          <div className= {`left-right-conatiner ${showtoggleButton ? "light-theme  " : "dark-theme"}`}>
        {jwtaccesToken === undefined || null ? "" : <div className="left-bar">
                            <div className='left-link-conatiner'>
                            {Caterogy.map(eachItem=>(<Leftbar  key={eachItem.uniqueId} leftbarLinks={eachItem} OnclickedLeftbarLink={this.OnclickedLeftbarLink}/>))}
                            </div>
                            <div className="leftbar-social-media">
                            <h4>CONTACT US</h4>
                            <div className='leftbar-socailicons'>
                            {Caterogy.map(eachItem=>(<SocialMedia  key={eachItem.uniqueId} leftbarLinks={eachItem} />))}
                            
                            </div>
                            <div className='socail-para'>
                              <h3>Enjoy! Now you can see your channel and recommdationa</h3>
                            </div>
                            </div>
        </div> }
                        
        <div className='right-conatiner'>
        {this.renderRoute()}
        </div>
        </div>
    </div>
    
    </div>
    </ToggleContext.Provider>
 </BrowserRouter>
 </div>
  )
}
}

export default App;