import CartContext from "./CartContext"
import Cartview from "./CartvIew/Cartview"
import { EmptyCartView } from "./EmptyCart"
import  Header  from "./Header"
export const Cart = ()=>{
    
    return( 
        <CartContext.Consumer>
         {value=>{
            const{cartList} = value
            const showEmptyview = cartList.length === 0
            return(
                <>
                <Header/>
                    <div className="cart-container">
                    <div className="cart-content-conatiner">
                        <h1>My Cart</h1>
                       {showEmptyview ? <EmptyCartView/> : <Cartview/>}
                    </div>
                    </div>
                </>
             )
            
        }
}
        </CartContext.Consumer>
      
    )
        
    
}