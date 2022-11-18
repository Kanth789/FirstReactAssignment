import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react'

import UserStore from "../UserStore";


const Navbar = observer((props)=>{
    const{link} = props
    const{id,Name} = link
    const  todoListStore  = UserStore
    const OnclickedButton = ()=>{
        console.log("button clciked")
        todoListStore.setFilter(id)
    }
    
    return(
        <div>
            <nav>
              <button onClick={OnclickedButton}>{Name}</button>
            </nav>
        </div>
    )
})
export default Navbar