import { Component } from "react";
import { BiLike } from "react-icons/bi";
import {BiDislike}  from "react-icons/bi";
import { MdPlaylistAdd } from "react-icons/md";
import Cookies from'js-cookie';
import { BallTriangle } from 'react-loader-spinner';
import ReactPlayer from 'react-player'
import './ParticularVideo.css'
import ToggleContext from "./ToggleContext";
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}
class ParticluarVideoDeatils extends Component{
  static contextType = ToggleContext
    state={
        videoDetails:{},
        channelDataObj:{},
        apiStatus: apiStatusConstants.initial,
        liked: false,
        disliked: false,
        saved: false,
    }
    
    componentDidMount() {
        this.getData()
        
        
       
      }
      checkingSaved = () =>{
        const {videoDetails} = this.state
        const context = this.context
        const savedVideo = context.savedVideos
        if(savedVideo.find(eachItem=>eachItem.id === videoDetails.id))
                  {
                    this.setState(prevState=>({saved:!prevState.saved}))
                  }
                 
      }
      checkingLiked = () =>{
        const {videoDetails} = this.state
        const context = this.context
        const likedvideo = context.likedVideos
        console.log(likedvideo)
       
                  if(likedvideo.find(eachItem=>eachItem.id === videoDetails.id))
                  {
                      this.setState(prevState=>({liked:!prevState.liked}))
                 }
      }
      checkingDisLiked = () =>{
        const {videoDetails} = this.state
        const context = this.context
        const Dislikedvideo = context.DislikedVideo
        
       
                  if(Dislikedvideo.find(eachItem=>eachItem.id === videoDetails.id))
                  {
                      this.setState(prevState=>({disliked:!prevState.disliked}))
                 }
      }
      
      componentWillUnmount() {
        this.mounted = false
      }
    
      getData = async () => {
        
        this.mounted = true
        const {match} = this.props
        const {params} = match
        const {id} = params
        const jwtToken = Cookies.get('jwt_token')
        const url = `https://apis.ccbp.in/videos/${id}`
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'GET',
        }
        try{
        const response = await fetch(url, options)
        if (response.ok) {
          const responseData = await response.json()
          const data = responseData.video_details
          const convertedData = {
            channel: data.channel,
            description: data.description,
            id: data.id,
            publishedAt: data.published_at,
            thumbnailUrl: data.thumbnail_url,
            title: data.title,
            videoUrl: data.video_url,
            viewCount: data.view_count,
          }
          const channelData = {
            name: data.channel.name,
            profileImageUrl: data.channel.profile_image_url,
            subscriberCount: data.channel.subscriber_count,
          }
          if (this.mounted) {
             this.setState({
              videoDetails: convertedData,
              channelDataObj: channelData,
              apiStatus:apiStatusConstants.success
            })
            this.checkingSaved()
            this.checkingLiked()
            this.checkingDisLiked()
          }
        }
    }
    catch(error){
      console.log(error)
        this.setState({apiStatus:apiStatusConstants.failure})
    }
      }
      isDisliked = () => {
        const {liked, disliked} = this.state
        if (liked) {
          this.setState({liked: false})
        }
        if (disliked) {
          this.setState({disliked: false})
        } else {
          this.setState({disliked: true})
        }
      }
    
      isLiked = () => {
        const {liked, disliked} = this.state
        if (disliked) {
          this.setState({disliked: false})
        }
        if (liked) {
          this.setState({liked: false})
        } else {
          this.setState({liked: true})
        }
      }
    
      isSaved = async () => {
        const {saved} = this.state
        if (saved) {
           this.setState({saved: false})
        } else {
           this.setState({saved: true})
        }
      }
    renderParticularVideoView = () =>{
        
        return(
            <ToggleContext.Consumer>
            {value=>{
                const{addVideoItem,showtoggleButton,savedVideos,toggleSavedvideo,toggleLikedvideo,toggleDislikedvideo} = value
            
                const {videoDetails, channelDataObj, liked, disliked, saved} = this.state
                const {videoUrl, title, viewCount, publishedAt, description} = videoDetails
                const{profileImageUrl,subscriberCount,name} = channelDataObj
                // const onSave = () => {
                //     console.log(saved)
                //     this.isSaved()
                //     addSavedVideos(videoDetails)
                    
                //   }
                  const toggleSave = () =>{
                    toggleSavedvideo(videoDetails)
                    this.isSaved()
                  }
                 const toggleLike = () =>{
                  toggleLikedvideo(videoDetails)
                  this.isLiked()
                 }
                 const toggleDisLike = () =>{
                  toggleDislikedvideo(videoDetails)
                  this.isDisliked()
                 }
                  const colorIcon = showtoggleButton ? "black" : "white"
                
                  
            return(
            <div className={`ParticularVideo-Conatiner ${showtoggleButton ? "" : "dark-theme-conatiner"}`} >
              
            <div className="Particular-video">
        <ReactPlayer url={videoUrl}  className="reactplayer"/>
            </div>
            <div className="particular-video-header-desc">
            <div className="Particular-video-header">
                <div className="Particular-video-heading">
                    <h2>{title}</h2>
                    <div className="Particular-video-view-duration">
                        <div className="Particular-video-view">
                        <p>{viewCount}</p>
                        <span>.</span>
                        <p>{publishedAt}</p>
                        </div>
                        <div className="Particular-video-icons">
                            <div className="like" onClick={toggleLike}>
                                {liked ? <BiLike  color=" #3b82f6"  size={25} /> : <BiLike color={colorIcon} size={25} />}
                                {liked ? <p className="blue">Like</p> : <p>Like</p> } 
                            </div>
                            <div className="Dis-like" onClick={toggleDisLike}>
                                {disliked ? <BiDislike  color=" #3b82f6"size={25} /> :<BiDislike color={colorIcon} size={25}/>}
                                {disliked ? <p className="blue">Dislike</p> : <p className="blue-disLike">Dislike</p>}
                            </div>
                            <div className="Saved-icon"  onClick={toggleSave}>
                            {saved ? <MdPlaylistAdd  color=" #3b82f6" size={25} /> :<MdPlaylistAdd color={colorIcon}  size={25}/>}
                                {saved ? <p className="blue">Saved</p> : <p className="">Save</p>}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="Particular-video-desc">
               
                    <div className="Particular-video-logo">
                        <div>
                        <img src={profileImageUrl}alt="video-logo"/>
                        </div>
                    <div className="Particular-video-header">
                        <h3>{name}</h3>
                        <p>{subscriberCount}</p>
                        <div className="Particular-video-para">
                            <p>{description}</p>
                        </div>
                    </div>
                  </div>
                    
            </div>
            </div>
        </div>
            ) 
          }}
           </ToggleContext.Consumer>
        )
    }
    renderFailureView = ( )=>(
        <div className="Particular-video-failure">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"/>
        </div>
    )
    rendeLoadingView = () =>(
        <div className="Particular-video-loading">
             <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}/>
        </div>
    )
    renderVideosDetails = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderParticularVideoView()
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
          <>
            {this.renderVideosDetails()}
          </>     
        )
    }
}

export default ParticluarVideoDeatils