import  Header  from "./Header"
import Cookies from "js-cookie";
import { Navigate } from 'react-router-dom';
export const Cart = ()=>{
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken === undefined)
    {
        return <Navigate to="/login"/>
    }
    return(
        <>
        <Header/>
        <div className="cart-container">
        <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            alt="cart"
            className="cart-img"
        />
        </div>
        
        </>
    )
}