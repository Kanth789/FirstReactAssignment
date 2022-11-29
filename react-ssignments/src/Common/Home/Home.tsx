import {useTranslation,Trans} from 'react-i18next'
import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import React from "react";


import './Home.css';

import Header from '../Header/Header';

const Home = () =>{
    const {t} = useTranslation()
  
    return(
        <>
        <Header history={undefined}/>
        <div className="main-conatiner">
        <div className="main">
        <div className="Home-conatiner">
            <div className="Home-content">
                <div className="heading">
                <h1 id="heading">{t('heading')}</h1>
                </div>
                <div className="Home-para">
                    <p>{t('Home-para')}</p>
                </div>
                <div>
                    <Link to="/jobs" className="nav-link">
                    <button data-testid="FindJobs">{t('Home-button')}</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Home