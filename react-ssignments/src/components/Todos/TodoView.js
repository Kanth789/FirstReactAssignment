import { observer } from "mobx-react-lite";
import {makeObservable,autorun,observable, action,computed,reaction,toJS } from "mobx"
import {useTranslation,Trans} from 'react-i18next'
import UserStore from "../UserStore";
import { inject, Provider } from "mobx-react";
const  TodoView = inject("todoListStore")(observer(({ todoListStore,todo }) =>{
  

  const {t} = useTranslation()  
  return (
    
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={todoListStore.toggle}
    
          checked={todo.isChecked}
        />
        <label>{todo.name}</label>
        <button  onClick={() => todoListStore.deleteTodo(todo.id)}>{t('button-delete')}</button>
      </div>
      
    </li>
   
  );
}
))
export default TodoView;
