import { makeObservable, runInAction,autorun,observable, action,computed } from "mobx"
import { v4 as uuid } from 'uuid';
class TodoStore {

        id = uuid();
        name = '';
        ischecked=false;
    
        constructor(todo) {
            this.name = todo.name;
        
            makeObservable(this, {
                name: observable,
                ischecked: observable,
                
            });
          }
      
     
}


export default TodoStore