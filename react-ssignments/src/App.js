import logo from './logo.svg';
import './App.css';
import ConfigurationController from './Components/ConfigurationController/ConfigurationController';
import Layout from './Components/Layout/Layout';
import { Component } from 'react';
const CategroyList =[
  {
      name:'Content',
      checkBoxId:'ContentId'
      
  },
  {
      name:'Left Navbar',
      checkBoxId:'leftNavbar'
  },  
  {
      name:'Right Navbar',
      checkBoxId:'rightNavbar'
      
  },

]
class  App extends Component {
  state = {
    onToggleShowContent : false,
    onToggleShowLeftNavbar : false,
    onToggleShowRightNavbar : false
  }
  OnclickedBox = (checkBoxId) =>{
    if(checkBoxId === 'ContentId') 
    {
      console.log(checkBoxId)
       this.setState(prevState=>({onToggleShowContent:!prevState.onToggleShowContent}))
       
    }
    else if(checkBoxId === 'leftNavbar')
    {
      this.setState(prevState=>({onToggleShowLeftNavbar:!prevState.onToggleShowLeftNavbar}))
      
    }
    else{
      this.setState(prevState=>({onToggleShowRightNavbar:!prevState.onToggleShowRightNavbar}))
     
    }
  }
  render(){
     const{onToggleShowContent,onToggleShowLeftNavbar,onToggleShowRightNavbar} = this.state
    return (
      <>
      <div>
      <div className="nav-bar-header">
                <h2>Layout</h2>
      </div>
      {CategroyList.map(eachItem=>(<ConfigurationController CategroyList={eachItem} OnclickedBox={this.OnclickedBox}/>))}
      </div>
      <Layout onToggleShowContent={onToggleShowContent} onToggleShowLeftNavbar={onToggleShowLeftNavbar} onToggleShowRightNavbar={onToggleShowRightNavbar} />
      </>
    );
  }
  
}

export default App;
