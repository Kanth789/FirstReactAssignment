import {makeAutoObservable,autorun,observable,toJS, action,computed,reaction } from "mobx"
import React from "react";
import { v4 as uuid } from 'uuid';
import { getLocalStoreItem, setLocalStoreItem } from "../uitl";
type UserElemenet = {
  id:string;
  name:string;
  isChecked:boolean
}


class UserStore {
    todos: UserElemenet[] =[];
    searchInput=''
    filter="All"
    constructor(){ 
      if(getLocalStoreItem("todoStorage")!== null )
        {
           this.todos = getLocalStoreItem("todoStorage")
        }
        makeAutoObservable(this);
        
        
        
    }

  
   
   setFilter=(data:string)=>{
    this.filter = data
   
   }
    
    createTodo=()=>{
        const newList = { 
        id :uuid(),
        name :this.searchInput,
        isChecked:false,
        }
      this.todos.push(newList)
      console.log(toJS(this.todos),"created todo")

    }
    onSearchInput(data:string){
        this.searchInput = data

    }
    deleteTodo(todoId:string) {
        const todoIndex = this.todos.findIndex(({ id }) => id === todoId);
        this.todos.splice(todoIndex, 1);
      }
    SaveTodo(){
        setLocalStoreItem("todoStorage", this.todos);
    }
     
    toggle=(value:string)=> {
       this.todos= this.todos.map(eachItem=>{
            if(eachItem.id===value){
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