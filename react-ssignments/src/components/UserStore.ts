import {makeObservable,autorun,observable, action,computed,reaction } from "mobx"
import React from "react";
import { v4 as uuid } from 'uuid';
type UserElemenet = {
  id:string;
  name:string;
  isChecked:boolean
}


class UserStore {
    todos: UserElemenet[] =JSON.parse(localStorage.getItem("todoStorage")as string);
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

  
   
   setFilter=(data:string)=>{
    this.filter = data
   
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
    onSearchInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(this.searchInput)
        this.searchInput = event.target.value

    }
    deleteTodo(todoId:string) {
        const todoIndex = this.todos.findIndex(({ id }) => id === todoId);
        this.todos.splice(todoIndex, 1);
      }
    SaveTodo(){
        localStorage.setItem("todoStorage", JSON.stringify(this.todos));
    }
     
    toggle=(event:React.ChangeEvent<HTMLInputElement>)=> {
       this.todos= this.todos.map(eachItem=>{
            if(eachItem.id===event.target.id){
                return {...eachItem, isChecked: !eachItem.isChecked}
            }
            return eachItem
        })
      }

      get filterTodos() {
        
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