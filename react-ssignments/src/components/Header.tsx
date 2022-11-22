import { Link } from "react-router-dom"
import Cookies from 'js-cookie'
import React from "react"
import {useTranslation,Trans} from 'react-i18next'
import i18n from "i18next";
const lngs = {
    en:{
      nativeName:'English'
    },
    te:{
      nativeName:'Telugu'
    }
  };
const Header = (props: { history: any })=>{
    const {t} = useTranslation()
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
    return(
        <div className="nav-conatiner">
            <div className="nav-bar">
                <div className="navigations">
                <Link className="nav-link" to={""}>
            <div className="nav-bar-logo">
                <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="logo"/>
                
            </div>
            </Link>
            <div className="nav-links">
            <div>
                   
                   <select  onClick={(event)=> i18n.changeLanguage((event.target as HTMLInputElement).value)}>
                   {Object.keys(lngs).map((lng)=>(
                      <option value={lng}>{lngs[lng as keyof typeof lngs].nativeName}</option>
                   
                  ))} </select>
              </div>
            <Link to="/"className="nav-link">
                 
                <div className="links">
                {t('Home-nav-1')}
                </div>
                </Link>
                <Link to="/jobs"className="nav-link">
                <div className="links">
                {t('Home-nav-2')}
                </div>
                </Link>
            </div>
            <div className="nav-button">
                <Link to="/login"className="nav-link"> 
                <button onClick={onClickLogout}>{t('logout-button')}</button>
                </Link>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Header