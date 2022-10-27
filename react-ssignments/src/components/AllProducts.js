import { Component } from "react";
import Cookies from'js-cookie';
import ProductCard from "./ProductCard";
import { TailSpin } from 'react-loader-spinner'
class AllProducts extends Component{
    state = {
        productList :[],
        isLoading: true,
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts =async()=>{
        const apiUrl ="https://apis.ccbp.in/products"
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method:"GET",
            headers:{
                Authorization : `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(apiUrl,options)
        if(response.ok === true)
        {
            const data = await response.json()
            const updatedData = data.products.map(eachItem=>({
                title:eachItem.title,
                brand:eachItem.brand,
                id:eachItem.id,
                image_Url:eachItem.image_url,
                price:eachItem.price,
                rating:eachItem.rating,
            }))
            this.setState({productList:updatedData,isLoading:false})
           
        }
    }
    renderProductsList =()=>{
        const {productList} = this.state
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header"> 
                        <h2>All Products</h2>
                    </div>
                    <div className="products-conatiner">
                    {productList.map((eachItem) => (
            <ProductCard productData={eachItem} key={eachItem.id} />
          ))}
                    </div>
                </div>
            </div>
        )
    }
    render()
    { 
        const {isLoading} = this.state
        return(
            <>
            { isLoading ? (< TailSpin
                height="80"
                width="80"
                color="#0284c7"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />): this.renderProductsList()
              }
              </>
        )
    }
}

export default AllProducts