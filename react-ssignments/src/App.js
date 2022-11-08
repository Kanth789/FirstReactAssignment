import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route ,Switch,Redirect} from "react-router-dom" ;
import Login from './Components/Login/Login';
import ProctetedRoute from './Components/Protected';
import Home from './Components/Home/Home';
import { Component } from 'react';
import ToggleContext from './Components/ToggleContext';
import Navbar from './Components/Navbar/Navbar';

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
    <Switch>
       <Route exact path="/login" component={Login}></Route>
      <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
      
      <Redirect to="not-found" />
    </Switch>
    </ToggleContext.Provider>
 </BrowserRouter>
  )
}
}

export default App;