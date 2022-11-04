
import CartContext from "../CartContext"
import CartItem from "../CartItem"
const Cartview = () =>{
    return(
        
        <CartContext.Consumer>
            {
                value =>{
                    const {cartList} = value
                    return(
                        <ul className="cart-list">
                            {cartList.map(eachItem=>(<CartItem  key={eachItem.id} cartItemDetails={eachItem}/>))}
                        </ul>
                    )
                }
            }
        </CartContext.Consumer>
    )
}

export default Cartview