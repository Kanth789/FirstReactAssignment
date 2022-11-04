import {Component} from 'react'
import Cookies from 'js-cookie'
import { ThreeDots } from  'react-loader-spinner'
import ProductCard from './ProductCard'
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
  

class PrimeDeals extends Component{
    state={
        primeDeals:[],
        apiStatus:apiStatusConstants.initial
    }
    componentDidMount() {
        this.getPrimeDeals()
    }
    getPrimeDeals = async ()=>{
        const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/prime-deals'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try{
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.prime_deals.map(eachItem => ({
        title: eachItem.title,
        brand: eachItem.brand,
        price: eachItem.price,
        id: eachItem.id,
        image_Url: eachItem.image_url,
        rating: eachItem.rating,
      }))
      this.setState({
        primeDeals: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }}

    catch{  
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
    }
     
    renderPrimeDealsList = ()=>{
        const {primeDeals} = this.state
        return(
            <div className="prime-deals-conatiner">
                <div className="header">
                    <h2>Exclusive Prime Deals</h2>
                </div>
                <div className="prime-deals-list">
                { primeDeals.map(eachItem=>(<ProductCard productData={eachItem} key={eachItem.id} />))}
                </div>
            </div>
        )
    }
    renderPrimeDealsFailureView = () => (
        <div className='prime-deals-failure-img'>
        <img
          src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
          alt="Register Prime"
          className="register-prime-image"
        />
        </div>
      )
    
      renderLoadingView = () => (
        <div className="products-loader-container">
                <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
        </div>
      )
    render(){
       const {apiStatus} = this.state
       switch (apiStatus) {
        case apiStatusConstants.success:
          return this.renderPrimeDealsList()
        case apiStatusConstants.failure:
          return this.renderPrimeDealsFailureView()
        case apiStatusConstants.inProgress:
          return this.renderLoadingView()
        default:
          return null
      }
    }
}

export default PrimeDeals