import {makeAutoObservable,autorun,observable, action,computed,reaction } from "mobx"
import { v4 as uuid } from 'uuid';
class UserStore {
    todos=[];
    searchInput=''
    filter="All"
    constructor(){
     
        makeAutoObservable(this );
        if(JSON.parse(localStorage.getItem("todoStorage")!== null))
        {
           this.todos = JSON.parse(localStorage.getItem("todoStorage"))
        }
           
    }
    
  
   
   setFilter=(data)=>{
    this.filter = data
   
   }
    
    createTodo=()=>{
        const newList = { 
        id :uuid(),
        name :this.searchInput,
        isChecked:false,
        }
      console.log(this.todos)

      this.todos.push(newList)
      
     
    }
    onSearchInput=(data)=>{
        this.searchInput = data
        console.log(this.searchInput)

    }
    deleteTodo=(todoId)=> {
        const todoIndex = this.todos.findIndex(({ id }) => id === todoId);
        this.todos.splice(todoIndex, 1);
      }
    SaveTodo=()=>{
        localStorage.setItem("todoStorage", JSON.stringify(this.todos));
    }
     
    toggle=(event)=> {
       this.todos= this.todos.map(eachItem=>{
            if(eachItem.id===event.target.id){
                return {...eachItem, isChecked: !eachItem.isChecked}
            }
            return eachItem
        })
      }
      get filterTodos(){
        
        switch (this.filter) {
          
          case "All":
            return this.todos;
          case "Active":
            return this.todos.filter(eachItem=>(eachItem.isChecked === false))
          case "Completed":
            return this.todos.filter(eachItem=>(eachItem.isChecked === true))
          default:
            return this.todos;
        }
      }
      
}

export default new UserStore()