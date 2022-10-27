import  Header  from "./Header";
import Cookies from "js-cookie";
import { Navigate } from 'react-router-dom';

export const Home = () =>{
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken === undefined)
    {
        return <Navigate to="/login"/>
    }
    return(
        <>
        <Header/>
        <div className="home-conatiner">
          <div className="home-content">
          <div className="home-content-header">
            <h2>Clothes That Get YOU Noticed</h2>
          </div>
          <div className="home-content-para">
            <p> Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.</p>
          </div>
          <div className="home-content-button">
            <button>Shop Now</button>
          </div>
          </div>
          <div className="home-content-img">
          <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="home-img"/>  
          </div>  
        </div>
        
        </>
    )
}