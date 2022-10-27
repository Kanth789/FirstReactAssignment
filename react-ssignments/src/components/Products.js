import  Header  from "./Header";
import Cookies from "js-cookie";
import { Navigate } from 'react-router-dom';
export const Products =()=>{
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken === undefined)
    {
        return <Navigate to="/login"/>
    }
    return(
        <>
        <Header/>
        <div className="products-conatiner">
            <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
            alt="products"
            className="products-img"
        />
        </div>
        </>
    )
}