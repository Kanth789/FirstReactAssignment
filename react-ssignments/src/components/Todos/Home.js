import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react-lite'

import UserStore from "../UserStore";
const Home = observer(()=>{
    const  todoListStore  = UserStore
    
    
  
    
    return(
        <div>
            
            <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="enter todo"
                  
                    value={todoListStore.searchInput}
                    onChange={todoListStore.onSearchInput}
                   
                />
                <button   onClick={() => {
                    
                        
                        todoListStore.createTodo(todoListStore.searchInput);
                    
                    }}>Add</button>
           
        </div>
    )
})
export default Home