import logo from './logo.svg';
import './App.css';
import SimpleTodo from './components/SimpleTodo/SimpleTodo';
import { Component } from 'react';
const InitialTodoList = [
  {
    uniqueNo : 1,
    content : "Class Components"
  },
  {
    uniqueNo : 2,
    content : "Function Components"
  },
  {
    uniqueNo : 3,
    content : "Function Components"
  },
  {
    uniqueNo : 4,
    content : "Function Components"
  },
  {
    uniqeNo : 5,
    content : "Function Components"
  },
  {
    uniqueNo : 6,
    content : "Function Components"
  },
  {
    uniqueNo : 7,
    content : "Function Components"
  },

]
class App extends Component{
  state = {
      TodoListUpdate : InitialTodoList
  }
  
  onDeleteTodo = uniqueNo => {
      const {TodoListUpdate} = this.state
      console.log(uniqueNo + "in App Js")
      const filterData = TodoListUpdate.filter(eachItem => eachItem.uniqueNo !== uniqueNo)
      this.setState({TodoListUpdate:filterData})

  }
  render(){
    const {TodoListUpdate} = this.state
      return(
          <div className='main-conatiner'>
          <div className="header">
              <h4 className="heading">Simple Todo</h4>
          </div>
          
          <div className='main'>
          { TodoListUpdate.map(eachItem=>
          (<SimpleTodo  onDeleteTodo ={this.onDeleteTodo} InitialTodoList={eachItem} key={eachItem.uniqueNo}/>
          ))}
          </div>
        </div>
      )
  }
}
export default App;
