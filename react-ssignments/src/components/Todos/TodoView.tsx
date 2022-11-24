import { observer } from "mobx-react-lite";
import UserStore from "../UserStore";
import { inject, Provider } from "mobx-react";
import {useTranslation,Trans} from 'react-i18next'
type MyProps = {
  todo:{
      id:string;
      name:string;
      isChecked:boolean
  }
};
const  TodoView = inject("todoListStore")(observer((props:MyProps ) =>{
 
  const store = UserStore
  const {t} = useTranslation() 
  const OnchangedClick = (event:React.ChangeEvent<HTMLInputElement>)=>{
    store.toggle(event.target.value)
  }
  return (
    <>
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={OnchangedClick}
          id={props.todo.id}
          checked={props.todo.isChecked}
        />
        <label>{props.todo.name}</label>
        <button  onClick={() => store.deleteTodo(props.todo.id)}>{t('button-delete')}</button>
      </div>
      
    </li>
    </>
  );
}
))
export default TodoView;
