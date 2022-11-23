import React, {  useState,useEffect } from "react"
import {inject, observer} from 'mobx-react'
import {makeObservable,autorun,observable, action,computed,reaction } from "mobx"
import UserStore from "../UserStore";
import {useTranslation,Trans} from 'react-i18next'

const Navbar = inject("todoListStore")(observer(({todoListStore,link})=>{
    console.log(link)
    const {t} = useTranslation()
    const{id,Name} = link
   
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
}))
export default Navbar