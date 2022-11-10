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
const Caterogy = [
  {
      uniqueId:'Home',
      name:'Home',
      icon:'AiOutlineHome',
      imgUrl :'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png',
      altName:'face-book-icon'
  },
  {
      uniqueId:'Trending',
      name:'Trending',
      icon:'AiOutlineFire',
      imgUrl :'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png ',
      altName:'twitter-icon'
  },
  {
      uniqueId:"Gaming",
      name:"Gaming",
      icon:'SiYoutubegaming',
      imgUrl :'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png',
      altName:'likedIn-icon'
  },
  {
      uniqueId:"Saved",
      name:"Saved videos",
      icon:'MdPlaylistAdd',
  }
]

const getAccessToken =()=>{
  return Cookies.get('jwt_token')
}
class  App extends Component {
  state ={
    showtoggleButton: true,
    jwtaccesToken:'',
    savedVideos: []
  }
  componentDidMount(){
    this.OnJwtTokken()
  }
  OnclickedSaved = () =>{
    this.setState(prevState=>({clickedSaved:!prevState.clickedSaved}))
}

  addSavedVideos =  data => {
    
    const {savedVideos} = this.state
    if (savedVideos.length > 0) {
      const checkSavedVideos = savedVideos.filter(item => item.id === data.id)
      if (checkSavedVideos.length === 0) {
         this.setState({
          savedVideos: [...savedVideos, data],
        })
      }
    } else {
       this.setState({
        savedVideos: [...savedVideos, data],
      })
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
      <Redirect to="not-found" />
    </Switch>
    )
  }
  render(){
    const {showtoggleButton,savedData,jwtaccesToken,savedVideos} = this.state
   
    console.log(jwtaccesToken,"jwt token")
  return (
    <div className='app'>
    <BrowserRouter>
    
    <ToggleContext.Provider  value={{onClickedToggle:this.onClickedToggle,showtoggleButton,savedData,jwtaccesToken:this.OnJwtTokken, savedVideos,addSavedVideos: this.addSavedVideos}}>
      
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