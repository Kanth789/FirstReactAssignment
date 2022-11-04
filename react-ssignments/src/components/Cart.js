import CartContext from "./CartContext"
import Cartview from "./CartvIew/Cartview"
import { EmptyCartView } from "./EmptyCart"
import  Header  from "./Header";
import Carttotal from "./Carttotal";
export const Cart = ()=>{
    
    return( 
        <CartContext.Consumer>
         {value=>{
           
            const {cartList, removeAllCartItems} = value
            const showEmptyview = cartList.length === 0
            const onClickRemoveAllBtn = () => {
              removeAllCartItems()
            }
            return(
                <>
                <Header/>
                    <div className="cart-container">
                    <div className="cart-content-conatiner">
                        {showEmptyview ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAllBtn}
                >
                  Remove All
                </button>
                <Cartview />
                <Carttotal />
              </div>
            )}
                    </div>
                    </div>
                </>
             )
            
        }
}
        </CartContext.Consumer>
      
    )
        
    
}


