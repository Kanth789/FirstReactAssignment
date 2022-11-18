import { makeObservable, runInAction,autorun,observable, action,computed } from "mobx"
import { v4 as uuid } from 'uuid';
class UserStore {
    todos=JSON.parse(localStorage.getItem("todoStorage"));
    searchInput=''
    filter="All"
    constructor(){
        makeObservable(this ,{
        todos: observable,
        createTodo:action,
        deleteTodo:action,
        toggle:action.bound,
        searchInput:observable,
        filter:observable,
        onSearchInput:action.bound,
        filterTodos:computed,
        setFilter:action
    });
        
        
    }

   
   
   setFilter=(data)=>{
    this.filter = data
    console.log(this.filter,"filter set")
   }
    
    createTodo(){
        const newList = { 
        id :uuid(),
        name :this.searchInput,
        isChecked:false,
        }
      this.todos.push(newList)
      this.searchInput=""
    }
    onSearchInput=(event)=>{
        console.log(this.searchInput)
        this.searchInput = event.target.value

    }
    deleteTodo(todoId) {
        const todoIndex = this.todos.findIndex(({ id }) => id === todoId);
        this.todos.splice(todoIndex, 1);
      }
    SaveTodo(){
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
      get filterTodos() {
        console.log(this.filter)
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