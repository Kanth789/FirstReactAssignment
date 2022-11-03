import logo from './logo.svg';
import './App.css';
import ConfigurationController from './Components/ConfigurationController/ConfigurationController';
import Layout from './Components/Layout/Layout';
import { Component } from 'react';
import FilterContext from './Components/FilterContext';

class  App extends Component {
  state = {
    showContent : true,
    showLeftNavbar : true,
    showRightNavbar : true
  }
  onToggleShowContent = () =>{
    this.setState(prevState=>({showContent:!prevState.showContent}))
  }
  onToggleShowLeftNavbar = () =>{
    this.setState(prevState=>({showLeftNavbar:!prevState.showLeftNavbar}))
  }
  onToggleShowRightNavbar = () =>{
    this.setState(prevState=>({showRightNavbar:!prevState.showRightNavbar}))
  }
  render(){
     const {showContent,showLeftNavbar,showRightNavbar} = this.state
    return (
      
      <>
      
      <FilterContext.Provider value={{showContent,showLeftNavbar,showRightNavbar,onToggleShowContent:this.onToggleShowContent,onToggleShowLeftNavbar:this.onToggleShowLeftNavbar,onToggleShowRightNavbar:this.onToggleShowRightNavbar}}>
      <ConfigurationController/>
      
      <Layout/>
      </FilterContext.Provider>
      </>
      
    );
  }
  
}

export default App;
