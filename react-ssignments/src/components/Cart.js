import  Header  from "./Header"
export const Cart = ()=>{
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