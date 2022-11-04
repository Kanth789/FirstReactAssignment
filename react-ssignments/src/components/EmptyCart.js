
import { Link } from "react-router-dom"
export const EmptyCartView  = () =>{
    return(
        <div className="cart-empty-conatiner">
            <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            alt="cart"
            className="cart-img"
            /> 
            <h1>Your Cart is Empty</h1>
            <Link to="/products">
            <button>Shop Now</button>
            </Link>
        </div>
    )
}