import { Component } from "react";
import Cookies from'js-cookie';
import Header from "./Header";
import {Link} from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import SimilarProductItem from "./SimilarProductItem";
import './SpecificItem.css';
import CartContext from "./CartContext";
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
class ProductItemDetails  extends Component{
     state={
        productData:{},
        similarProductData:[],
        quantity:0,
        apiStatus: apiStatusConstants.initial,
     }
     componentDidMount(){
      const { match } = this.props
        const { params } = match
        const { id } = params
        this.getSpecificProduct(id)
     }
     getFormattedData = data => ({
        availability: data.availability,
        brand: data.brand,
        description: data.description,
        id: data.id,
        image_url: data.image_url,
        price: data.price,
        rating: data.rating,
        title: data.title,
        totalReviews: data.total_reviews,
      })
     getSpecificProduct = async(id)=>{
        const{productData,similarProductData,quantity,apiStatus} = this.state
        
        const apiUrl = `https://apis.ccbp.in/products/${id}`
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
            console.log(data)
            const updatedData = this.getFormattedData(data)
            const updatedSimilarProductsData = data.similar_products.map(
                eachItem => this.getFormattedData(eachItem),
              )
            this.setState({productData:updatedData,similarProductData:updatedSimilarProductsData, apiStatus: apiStatusConstants.success})
            
           
        }
        else {
          this.setState({
            apiStatus: apiStatusConstants.failure,
          })
        }

     }
     OnclickedSimilarProduct = (id) =>{
      this.getSpecificProduct(id)
     }
  renderLoadingView = () => (
    <div className="products-details-loader-container" testid="loader">
       <TailSpin
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )

  renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
      <Link to="/products">
        <button type="button" className="button">
          Continue Shopping
        </button>
      </Link>
    </div>
  )

     onDecrementQuantity = () => {
        const {quantity} = this.state
        if (quantity > 1) {
          this.setState(prevState => ({quantity: prevState.quantity - 1}))
        }
      }
    
      onIncrementQuantity = () => {
        this.setState(prevState => ({quantity: prevState.quantity + 1}))
      }
      renderProductDetails = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderProductDetailsView()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
      }
      renderProductDetailsView = ()=>{
        return(
        <CartContext.Consumer>
          {value=>{
            const {addCartItem} = value
            const{productData,similarProductData,quantity,apiStatus} = this.state
            const{total_reviews,title,brand,id,image_url,price,availability,description,rating} = productData
            const onClickAddtoCart = () =>{
              addCartItem({...productData,quantity})
            }
            return(
              <div className="main-container">
                  <div className="specific-details">
                      <div className="part-1">
                      <div className="part1-img">
                          <img src={image_url} alt="specific-card-img"/>
                      </div>
                      </div>
                      <div className="part-2">
                      <div className="part2-heading">
                          <h3>{title}</h3>
                          <h6>Rs:{price}</h6>
                      </div>
                      <div className="part2-rating">
                          <p>{rating}</p>
                          <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
                      </div>
                      <div className="part2-revies">
                          <p>{total_reviews}</p>
                      </div>
                      <div className="part2-content">
                          <p>{description}</p>
                      </div>
                      <div className="part2-avai-brand">
                          <div className="avaiable">
                              <h5>Available : </h5>
                              <h6>{availability}</h6>
                          </div>
                          <div className="brand">
                              <h5>Brand : </h5>
                              <h6>{brand}</h6>
                          </div>
                      </div>
                      <hr></hr>
                      <div className="part2-buttons">
                          <button onClick={this.onIncrementQuantity}>+</button>
                          <p>{quantity}</p>
                          <button onClick={this.onDecrementQuantity}>-</button>
                      </div>
                      <button className="addcart" onClick={onClickAddtoCart}>
                        ADD TO CART
                        </button>
  
                      
                      </div>
                  </div>
                  <div className="similar-products">
                  <h2>Similar Products</h2>
                  <div className="similar-conatiner">
                     {similarProductData.map(eachItem=>(<SimilarProductItem similarProducts={eachItem} key={eachItem.id} OnclickedSimilarProduct={this.OnclickedSimilarProduct}/>))}
                     </div>
                  </div>
              </div>
          )}}
        </CartContext.Consumer>
        )
      }
     render(){
       
        return(
            <>
            <Header/>
            <div className="main-container">
                {this.renderProductDetails()}
            </div>
            </>
        )
     }
}

export default ProductItemDetails