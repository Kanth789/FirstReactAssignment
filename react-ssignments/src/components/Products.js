import  Header  from "./Header";
import AllProducts from "./AllProducts";
import PrimeDeals from "./PrimeDeals";
export const Products =()=>{
    
    return(
        <>
        <Header/>
        <div className="prime-deals-conatiner">
        <PrimeDeals/>
        </div>
        <div className="products-conatiner">
         
            <AllProducts/>
           
        </div>
        </>
    )
}