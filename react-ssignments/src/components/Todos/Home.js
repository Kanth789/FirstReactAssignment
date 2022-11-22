import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react'
import i18n from "i18next";
import UserStore from "../UserStore";
import {useTranslation,Trans} from 'react-i18next'
import Navbar from "./Navbar";

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
    return(

        <div>  
             <div>
        {Object.keys(lngs).map((lng)=>(
          <button type='submit' key={lng} onClick={()=> i18n.changeLanguage(lng)} disabled={i18n.reslovedLanguage === lng}>{lngs[lng].nativeName}</button>
        ))}
      </div>
           {Navlist.map(eachItem=>(<Navbar key={eachItem.id} link={eachItem}/>))}
           <Trans i18nKey="title"></Trans>
                <input
                    className="new-todo"
                    placeholder="enter todo"
                  
                    value={todoListStore.searchInput}
                    onChange={todoListStore.onSearchInput}
                   
                />
                <button   onClick={() => {
                        todoListStore.createTodo(todoListStore.searchInput);
                    
                    }}>{t('button-Name')}</button>
           
        </div>
    )
})
export default Home