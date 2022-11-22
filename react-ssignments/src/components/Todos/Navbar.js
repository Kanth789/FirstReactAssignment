import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react'
import {makeObservable,autorun,observable, action,computed,reaction } from "mobx"
import UserStore from "../UserStore";
import {useTranslation,Trans} from 'react-i18next'

const Navbar = observer((props)=>{
    const {t} = useTranslation()
    const{link} = props
    const{id,Name} = link
    const  todoListStore  = UserStore
    const OnclickedButton = ()=>{
        todoListStore.setFilter(id)
    }
    // autorun(() => console.log(todoListStore.filter,"Autorun"))
    return(
        <div>
            <nav>
              <button onClick={OnclickedButton}>{Name}</button>
            </nav>
        </div>
    )
})
export default Navbar