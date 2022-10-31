import { Component } from "react";
import Cookies from'js-cookie';
import ProductCard from "./ProductCard";
import { TailSpin } from 'react-loader-spinner'
import ProductHeader from "./ProductHeader";
import FiltersGroup from "./FiltersGroup";
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
  const categoryOptions = [
    {
      name: 'Clothing',
      categoryId: '1',
    },
    {
      name: 'Electronics',
      categoryId: '2',
    },
    {
      name: 'Appliances',
      categoryId: '3',
    },
    {
      name: 'Grocery',
      categoryId: '4',
    },
    {
      name: 'Toys',
      categoryId: '5',
    },
  ]
  

const ratingsList = [
  
    {
      ratingId: '4',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
    },
    {
      ratingId: '3',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
    },
    {
      ratingId: '2',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
    },
    {
      ratingId: '1',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
    },
  ]
  const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
class AllProducts extends Component{
    state = {
        productList :[],
        apiStatus: apiStatusConstants.initial,
        activeOptionId: sortbyOptions[0].optionId,
        activeCategoryId: '',
        searchInput:'',
        activeRatingId: '',
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts =async()=>{
        const {activeOptionId,
            activeCategoryId,activeRatingId,searchInput} = this.state
            const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`
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
            this.setState({productList:updatedData, apiStatus: apiStatusConstants.success,})
            
           
        }
        else {
          this.setState({
            apiStatus: apiStatusConstants.failure,
          })
        }
    }

    updateActiveOptionId = activeOptionId => {
        this.setState({activeOptionId}, this.getProducts)
      }
      
      clearFilters = () => {
        this.setState(
          {
            searchInput: '',
            activeCategoryId: '',
            activeRatingId: '',
          },
          this.getProducts,
        )
      }
      changeRating = activeRatingId => {
        this.setState({activeRatingId}, this.getProducts)
      }
    
      changeCategory = activeCategoryId => {
        this.setState({activeCategoryId}, this.getProducts)
      }
    
      enterSearchInput = () => {
        this.getProducts()
      }
    
      changeSearchInput = searchInput => {
        this.setState({searchInput})
      }
      renderFailureView = () => (
        <div className="products-error-view-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
            alt="products failure"
            className="products-failure-img"
          />
          <h1 className="product-failure-heading-text">
            Oops! Something Went Wrong
          </h1>
          <p className="products-failure-description">
            We are having some trouble processing your request. Please try again.
          </p>
        </div>
      )
      renderLoadingView = () => (
        <div className="products-loader-container">
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
    renderProductsList =()=>{
        const {productList,activeOptionId} = this.state
        const shouldShowProductsList = productList.length > 0
        return shouldShowProductsList ?(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header-all"> 
                        <ProductHeader activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          updateActiveOptionId={this.updateActiveOptionId} />
                    </div>
                    
                    <div className="product-conatiner">
                    {productList.map((eachItem) => (
            <ProductCard productData={eachItem} key={eachItem.id} />
          ))}
                    </div>
                    </div>
                </div>
           
        ):(
            <div className="no-products-view">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                className="no-products-img"
                alt="no products"
              />
              <h1 className="no-products-heading">No Products Found</h1>
              <p className="no-products-description">
                We could not find any products. Try other filters.
              </p>
            </div>
          )
                    
    }
    renderAllProducts = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderProductsList()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
      }
    
    render()
    { 
        const {activeCategoryId, searchInput, activeRatingId} = this.state

    return (
      <div className="all-products-section">
        <FiltersGroup
          searchInput={searchInput}
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          changeSearchInput={this.changeSearchInput}
          enterSearchInput={this.enterSearchInput}
          activeCategoryId={activeCategoryId}
          activeRatingId={activeRatingId}
          changeCategory={this.changeCategory}
          changeRating={this.changeRating}
          clearFilters={this.clearFilters}
        />
        {this.renderAllProducts()}
      </div>
    )
  }
}

export default AllProducts