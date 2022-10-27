import  Header  from "./Header";
import AllProducts from "./AllProducts";
export const Products =()=>{
    
    return(
        <>
        <Header/>
        <div className="products-conatiner">
            <AllProducts/>
        </div>
        </>
    )
}