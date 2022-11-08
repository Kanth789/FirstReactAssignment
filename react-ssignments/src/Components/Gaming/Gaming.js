import { Component } from "react"
import Cookies from'js-cookie';
import { ThreeDots } from 'react-loader-spinner';
import GamingItem from "./GamingItem";
import ToggleContext from "../ToggleContext";
import { SiYoutubegaming } from "react-icons/si";
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}
class  Gaming  extends Component{
    state = {
        GamingData : [],
        apiStatus: apiStatusConstants.initial,
    }
    componentDidMount(){
        this.getTrendingData()
    }
    getTrendingData = async() =>{
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
        })
        const apiUrl="https://apis.ccbp.in/videos/gaming"
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
              
             
              const updatedGamingData = data.videos.map(eachItem=>({
                    id:eachItem.id,
                    thumbnail_url:eachItem.thumbnail_url,
                    view_count:eachItem.view_count,
                    
                    title:eachItem.title
              }))
              
             this.setState({GamingData:updatedGamingData,apiStatus:apiStatusConstants.success})
             
          }
          }
          catch{
            this.setState({
                apiStatus: apiStatusConstants.failure,
              })
          }

    }
    renderTrendingView = () =>{
        const{GamingData} = this.state
        
        return(
           <div className="gaming-cards">
             {GamingData.map(eachItem=>(<GamingItem key={eachItem.id} GamingDetails={eachItem}/>))}
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
                <div className={`Home-conatiner ${showtoggleButton ? "" : "dark-theme-conatiner"}`}>
        <div className="Gaming-conatiner">
            <div className="saved-video">
        <div className= {`saved-video-banner ${showtoggleButton ? "" : "saved-dark-theme-conatiner"}`}>
                           <div className="saved-icon">
                            <SiYoutubegaming color="Red" size={30}/>
                            </div> 
                            <div className="saved-icon-name">
                                <h2>Gaming Videos</h2>
                            </div>
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

export default Gaming