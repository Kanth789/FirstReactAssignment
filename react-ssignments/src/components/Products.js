import  Header  from "./Header"
export const Products =()=>{
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