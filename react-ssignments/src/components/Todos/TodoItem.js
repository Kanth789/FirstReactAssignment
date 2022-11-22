import React from "react"
import {observer} from 'mobx-react-lite'
import TodoView from "./TodoView";
import Home from "./Home";
import UserStore from "../UserStore";
import {useTranslation,Trans} from 'react-i18next'
const TodoItem = observer(()=>{ 
  const {t} = useTranslation()
    const  todoListStore  = UserStore;
    const onSaveButton = ()=> {
     todoListStore.SaveTodo()  
    }
    return(
        <div>
            <Home/> 
        <ul className="todo-list">
          
          {todoListStore.filterTodos.map((todo) => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        <button onClick={onSaveButton}>{t('button-save')}</button>
        </div>
    )
})
export default TodoItem