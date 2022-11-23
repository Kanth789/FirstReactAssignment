import React from "react"
import {observer} from 'mobx-react-lite'
import TodoView from "./TodoView";
import Home from "./Home";
import UserStore from "../UserStore";
import {useTranslation,Trans} from 'react-i18next'
import { inject, Provider } from "mobx-react";
const TodoItem = (observer(()=>{ 
  const {t} = useTranslation()
    const  todoListStore  = UserStore;
    const onSaveButton = ()=> {
     todoListStore.SaveTodo()  
    }
    return(
      <Provider todoListStore={UserStore}>
      
        <div>
            <Home/> 
        <ul className="todo-list">
          
          {Array.isArray(todoListStore.filterTodos) && todoListStore.filterTodos.map((todo) => (
            <TodoView todo={todo} key={todo.id} />
            ))}
        </ul>
        <button onClick={onSaveButton}>{t('button-save')}</button>
        </div>
            </Provider>
        
    )
}))
export default TodoItem