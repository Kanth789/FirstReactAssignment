import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/Notfound';
import { BrowserRouter,Route ,Redirect,Switch} from 'react-router-dom'; 
import { Component } from 'react';
import ToggleContext from './components/ToggleContext';
class  App  extends Component {
  state ={
    showtoggleButton: false
  }
  onClickedToggle = () =>{
    this.setState(prevState=>({showtoggleButton:!prevState.showtoggleButton}))
  }
  render(){
    const{showtoggleButton}  = this.state
  return (
    <BrowserRouter>
    <ToggleContext.Provider 
        value={{onClickedToggle:this.onClickedToggle,showtoggleButton:false}}
       >
      
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route  path="*" component={NotFound}></Route>
      
      <Redirect to="not-found" />
    </Switch>
    </ToggleContext.Provider>
    </BrowserRouter>
    
  );
  }
}

export default App;