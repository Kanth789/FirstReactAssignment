import { makeObservable, runInAction,autorun,observable, action,computed } from "mobx"
import { v4 as uuid } from 'uuid';
class UserStore {
    todos=JSON.parse(localStorage.getItem("todoStorage"));
    searchInput=''
    
    constructor(){
        makeObservable(this,{
            todos: observable,
            createTodo:action,
            deleteTodo:action,
            toggle:action.bound,
            searchInput:observable,
            onSearchInput:action.bound
        });
        
        
    }
   
    
    
    createTodo=()=>{
        const newList = { 
        id :uuid(),
        name :this.searchInput,
        isChecked:false,
        }
      this.todos.push(newList)
    }
    onSearchInput=(event)=>{
        this.searchInput = event.target.value
        console.log(this.searchInput)

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
}

export default new UserStore()