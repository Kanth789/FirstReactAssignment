import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react'
import {makeObservable,autorun,observable, action,computed,reaction } from "mobx"
import UserStore from "../UserStore";


const Navbar = observer((props)=>{
    const{link} = props
    const{id,Name} = link
    console.log(link)
    const  todoListStore  = UserStore
    const OnclickedButton = ()=>{
        console.log("button clciked")
        todoListStore.setFilter(id)
    }
    autorun(() => console.log(todoListStore.filter,"Autorun"))
    return(
        <div>
            <nav>
              <button onClick={OnclickedButton}>{Name}</button>
            </nav>
        </div>
    )
})
export default Navbar