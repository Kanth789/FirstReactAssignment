import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react'
import {makeObservable,autorun,observable, action,computed,reaction } from "mobx"
import UserStore from "../UserStore";
type MyProps = {
link:{
    id:string;
    Name:string
}
  };
const Navbar = observer((props:MyProps)=>{
   
    const  todoListStore  = UserStore
    const OnclickedButton = ()=>{
        console.log("button clciked")
        todoListStore.setFilter(props.link.id)
    }
    autorun(() => console.log(todoListStore.filter,"Autorun"))
    return(
        <div>
            <nav>
              <button onClick={OnclickedButton}>{props.link.Name}</button>
            </nav>
        </div>
    )
})
export default Navbar