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
    
  }
  onClickedToggle = () =>{
   
    this.setState(prevState=>({showtoggleButton:!prevState.showtoggleButton}))
   
  }
  render(){
    const {showtoggleButton} = this.state
  return (
    <BrowserRouter>
    
    <ToggleContext.Provider  value={{onClickedToggle:this.onClickedToggle,showtoggleButton}}>
      <div className='App-conatiner'>
        <Navbar/>
        <div className='main-conatiner'>
        <  div className={`left-bar ${showtoggleButton ? "light-theme  " : "dark-theme"}`}>
                            {Caterogy.map(eachItem=>(<Leftbar  key={eachItem.uniqueId} leftbarLinks={eachItem}/>))}
                        </div>
      <Switch>
       <Route exact path="/login" component={Login}></Route>
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