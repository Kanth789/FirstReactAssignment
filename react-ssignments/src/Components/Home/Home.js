import { Component } from "react";
import {AiOutlineHome}  from "react-icons/ai";
import {AiOutlineFire} from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { MdPlaylistAdd } from "react-icons/md";
import { BallTriangle } from 'react-loader-spinner';
import './Home.css'
import Cookies from 'js-cookie';
import Leftbar from "../Leftbar";
import Navbar from "../Navbar/Navbar";
import ToggleContext from "../ToggleContext";
import AllVideo from "../AllVideo";
import SearchBar from "../Searchbar";

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
class Home extends Component{
    state = {
        VideosData : [],
        apiStatus: apiStatusConstants.initial,
        searchInput: '',
        FullVideo:false,
    }
    OnclickedCardHome = (id) =>{
      this.setState(prevState=>({FullVideo:!prevState.FullVideo}))
    }
    componentDidMount(){
        this.getFullVideosData()
    }
    enterSearchInput = () => {
      this.getFullVideosData()
    }
    changeSearchInput = searchInput => {
      this.setState({searchInput})
    }
    getFullVideosData = async() =>{
     
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
        })
        const {VideosData,searchInput} = this.state
         
          const apiUrl=`https://apis.ccbp.in/videos/all?search=${searchInput}`
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
              // console.log(data)
              
              const updatedFullVideosData = data.videos.map(eachItem=>({
                published_at :eachItem.published_at,
                thumbnail_url:eachItem.thumbnail_url,
                title:eachItem.title,
                view_count:eachItem.view_count,
                name:eachItem.channel.name,
                profile_image_url:eachItem.channel.profile_image_url,
                id:eachItem.id,
                  
              }))
             this.setState({VideosData:updatedFullVideosData,apiStatus:apiStatusConstants.success})
             
          }
        }
          catch  {
              this.setState({
                apiStatus: apiStatusConstants.failure,
              })
            }
      }
      renderFullVideoData = () =>{
        const{VideosData,FullVideo} = this.state
        return(
          <>
          <div className="search-bar-Conatiner">
            <SearchBar changeSearchInput={this.changeSearchInput} enterSearchInput={this.enterSearchInput}/>
          </div>
           <div className="AllVideos-conatiner">
           {VideosData.map(eachItem=>(<AllVideo key={eachItem.id} VideosList={eachItem}/>))}
           </div>
           </>
        )
      }
      lengthOfList=()=>{
        const{VideosData} = this.state
        
        if(VideosData.length > 0 )
        {
            return this.renderFullVideoData()
        }
        else{
          return this.renderNoJobsFound() 
        }
      }
      renderNoJobsFound = ()=>{
        return(
          <div>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "/>
          </div>
        )
      }
      renderLoadingView = () => (
        <div className="products-details-loader-container" testid="loader">
                    <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      )
      renderFailureView = () => (
        <div className="product-details-error-view-container">
           <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" alt="faliure-view"/>
         
        </div>
      )
      renderAllVideosDetails = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.lengthOfList()
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
        return(
            <ToggleContext.Consumer>
                {
                value=>{
                    const{showtoggleButton} = value
                    
                    return(
                           <>
                        
                        <div className="Home-conatiner">
                        
                        <div className="right-bar">
                          <div className="right-bar-videos">
                         {this.renderAllVideosDetails()}
                         </div>
                        </div>
                        </div>
                        </>
                       )
                    }
                }
            </ToggleContext.Consumer>
        )
    }
}

export default Home