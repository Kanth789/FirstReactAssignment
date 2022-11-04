import { Cart } from "./Cart"
import './CartItem.css';
const CartItem = (props) =>{
    const{cartItemdetails} = props
    console.log(cartItemdetails)
    const{quantity,  total_reviews,title,brand,id,image_url,price,availability,description,rating} = cartItemdetails
    return(
        <li>
            <div className="cart-item-img">
                <img src={image_url}/>
            </div>
                <div className="cart-tem-header">
                    <h3>{title}</h3>
                    <h6>by : {brand}</h6>
                </div>
                <div className="cart-item-count">
                    <button>+</button>
                    <p>{quantity}</p>
                    <button>-</button>
                </div>
                <div className="cart-product-price">
                    <div className="price">
                     <h5>{price}</h5>
                    </div>
                    <div>
                        <img src=""/>
                    </div>
                </div>
           
        </li>
    )
}
export default CartItem