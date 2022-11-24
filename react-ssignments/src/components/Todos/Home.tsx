import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react'

import UserStore from "../UserStore";
import Navbar from "./Navbar";

const Navlist = [
    {
        id:'All',
        Name:"All"
    },
    {
        id:'Active',
        Name:"Active"
    },
    {
        id:'Completed',
        Name:"Completed"
    }
]

type link ={
    id:string;
    Name:string
}
const Home = observer(()=>{
    const  todoListStore  = UserStore
   
    return(
        <div>  
           {Navlist.map(eachItem=>(<Navbar key={eachItem.id} link={eachItem}/>))}
            <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="enter todo"
                  
                    value={todoListStore.searchInput}
                    onChange={todoListStore.onSearchInput}
                   
                />
                <button   onClick={() => {
                        todoListStore.createTodo();
                    
                    }}>Add</button>
           
        </div>
    )
})
export default Home