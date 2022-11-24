import { observer } from "mobx-react-lite";
import UserStore from "../UserStore";
const  TodoView = observer(({ todo }) =>{
  const  todoListStore  = UserStore;

    
  return (
    <>
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={todoListStore.toggle}
          id={todo.id}
          checked={todo.isChecked}
        />
        <label>{todo.name}</label>
        <button  onClick={() => todoListStore.deleteTodo(todo.id)}>Delete</button>
      </div>
      
    </li>
    </>
  );
}
)
export default TodoView;
