import { Component } from "react";
import Cookies from'js-cookie';
import ProductCard from "./ProductCard";
import { TailSpin } from 'react-loader-spinner'
import ProductHeader from "./ProductHeader";
const sortbyOptions = [
    {
      optionId: 'PRICE_HIGH',
      displayText: 'Price (High-Low)',
    },
    {
      optionId: 'PRICE_LOW',
      displayText: 'Price (Low-High)',
    },
  ]
class AllProducts extends Component{
    state = {
        productList :[],
        isLoading: true,
        activeOptionId: sortbyOptions[0].optionId,
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts =async()=>{
        const {activeOptionId} = this.state
        const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
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

    updateActiveOptionId = activeOptionId => {
        this.setState({activeOptionId}, this.getProducts)
      }
    renderProductsList =()=>{
        const {productList,activeOptionId} = this.state
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header-all"> 
                        <ProductHeader activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          updateActiveOptionId={this.updateActiveOptionId}/>
                    </div>
                    <div className="product-conatiner">
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