import React from "react"
import {observer} from 'mobx-react-lite'
import TodoView from "./TodoView";
import Home from "./Home";
import UserStore from "../UserStore";
import {useTranslation,Trans} from 'react-i18next'
import { inject, Provider } from "mobx-react";

const TodoItem = (observer(()=>{ 
  const {t} = useTranslation()
    const  ListStore  = UserStore;
    const onSaveButton = ()=> {
      ListStore.SaveTodo()  
    }
    console.log(ListStore.todos)
    return(
      
      
        <div>
            <Home/> 
        <ul className="todo-list">
          
          {ListStore.filterTodos.map((todo) => (
           
           <Provider todoListStore={UserStore}>
              <TodoView todo={todo} key={todo.id} /></Provider> 
            ))}
        </ul>
        <button onClick={onSaveButton}>{t('button-save')}</button>
        </div>
            
        
    ) 
}))
export default TodoItem