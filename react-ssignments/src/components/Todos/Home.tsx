import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react'
import i18n from "i18next";
import UserStore from "../UserStore";
import {useTranslation,Trans} from 'react-i18next'
import Navbar from "./Navbar";
import { Provider } from "mobx-react";
const lngs = {
    en:{
      nativeName:'English'
    },
    te:{
      nativeName:'Telugu'
    }
  };
const Home = observer(()=>{
    const  todoListStore  = UserStore
    const {t} = useTranslation()
    const Navlist = t('Navlist',{returnObjects:true})
    const Onchanged = (event:React.ChangeEvent<HTMLInputElement>)=>{
      todoListStore.onSearchInput(event.target.value)
      console.log(todoListStore.searchInput)
    }
    return(
      <div>  
             <div>
        {Object.keys(lngs).map((lng)=>(
          <button type='submit' key={lng} onClick={()=> i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng as keyof typeof lngs].nativeName}</button>
        ))}
      </div>
      
          
           {Array.isArray(Navlist) &&Navlist.map(eachItem=>(<Provider todoListStore={UserStore}><Navbar key={eachItem.id} link={eachItem}/></Provider>))}
           <Trans i18nKey="title"></Trans>
                <input
                   type="text"
                    className="new-todo"
                    placeholder="Add a new todo"
                    value={todoListStore.searchInput}
                    onChange={Onchanged}
                   
                />
                <button   onClick={() => {
                        todoListStore.createTodo();
                        console.log(todoListStore.todos,"created todo")
                    }}>{t('button-Name')}</button>
           
        </div>
       
    )
})
export default Home