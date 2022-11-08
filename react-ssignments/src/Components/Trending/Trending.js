import { Component } from "react"
import Cookies from'js-cookie';
import { ThreeDots } from 'react-loader-spinner';
import TrendingItem from "./TrendingItem";
import ToggleContext from "../ToggleContext";
import {AiOutlineFire} from "react-icons/ai";
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}
class  Trending  extends Component{
    state = {
        trendingData : [],
        apiStatus: apiStatusConstants.initial,
    }
    componentDidMount(){
        this.getTrendingData()
    }
    getTrendingData = async() =>{
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
        })
        const apiUrl="https://apis.ccbp.in/videos/trending"
         const jwtToken = Cookies.get('jwt_token')
          const options = {
              method:"GET",
              headers:{
                  Authorization : `Bearer ${jwtToken}`,
              },
          }
          try{
          const response =  await fetch(apiUrl,options)
          if(response.ok === true)
          {
              
              const data =  await response.json()
              
             
              const updatedTrendingData = data.videos.map(eachItem=>({
                    id:eachItem.id,
                    thumbnail_url:eachItem.thumbnail_url,
                    view_count:eachItem.view_count,
                    name:eachItem.channel.name,
                    profile_image_url:eachItem.channel.profile_image_url,
                    published_at:eachItem.published_at,
                    title:eachItem.title
              }))
              
             this.setState({trendingData:updatedTrendingData,apiStatus:apiStatusConstants.success})
             
          }
          }
          catch{
            this.setState({
                apiStatus: apiStatusConstants.failure,
              })
          }

    }
    renderTrendingView = () =>{
        const{trendingData} = this.state
        
        return(
           <div className="trending">
             {trendingData.map(eachItem=>(<TrendingItem key={eachItem.id} TrendingDetails={eachItem}/>))}
           </div>
        )
    }
    renderFailureView = ()=>(
        <div className="Particular-video-failure">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"/>
        </div>
    )
    rendeLoadingView = () =>(
        <div className="Particular-video-loading">
             <ThreeDots 
height="80" 
width="80" 
radius="9"
color="blue" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
        </div>
    )
    renderTrendingDeatilsView = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderTrendingView()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.rendeLoadingView()
          default:
            return null
        }
      }
    render(){
    return(
        <ToggleContext.Consumer>
        {
        value=>{
            const{showtoggleButton} = value
            return(
        <div className={`Home-conatiner ${showtoggleButton ? "" : "dark-theme"}`}>
        <div className="Trending-conatiner">
        <div className="saved-video-banner">
                           <div className="saved-icon">
                            <AiOutlineFire color="Red" size={30}/>
                            </div> 
                            <div className="saved-icon-name">
                                <h2>Gaming Videos</h2>
                            </div>
                        </div>
            {this.renderTrendingDeatilsView()}
        </div>
        </div>
            )
         }
        }
    </ToggleContext.Consumer>
    )
    }
}

export default Trending