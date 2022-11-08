import { Component } from "react";
import { BiLike } from "react-icons/bi";
import {BiDislike}  from "react-icons/bi";
import { MdPlaylistAdd } from "react-icons/md";
import Cookies from'js-cookie';
import { BallTriangle } from 'react-loader-spinner';
import ReactPlayer from 'react-player'
import './ParticularVideo.css'
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}
class ParticluarVideoDeatils extends Component{
    state={
        particluarVideo:{},
        apiStatus: apiStatusConstants.initial,
        clickedLike:false,
        clcikedDislike:false,
        clickedSaved:false
    }
    OnclickedLike = () =>{
        
        this.setState(prevState=>({clickedLike:!prevState.clickedLike}))
    }
    OnclickedDisLike = () =>{
        this.setState(prevState=>({clcikedDislike:!prevState.clcikedDislike}))
    }
    OnclickedSaved = () =>{
        this.setState(prevState=>({clickedSaved:!prevState.clickedSaved}))
    }
    componentDidMount(){
        this.getparticluarVideo()
    }
    getFormattedData = (data)=>({
        published_at :data.published_at,
                thumbnail_url:data.thumbnail_url,
                title:data.title,
                view_count:data.view_count,
                name:data.channel.name,
                profile_image_url:data.channel.profile_image_url,
                id:data.id,
                video_url:data.video_url ,
                subscriber_count:data.channel.subscriber_count,
                description:data.description
    })
    getparticluarVideo = async() =>{
        const { match } = this.props
        const { params } = match
        const { id } = params
      
      
          const apiUrl=`https://apis.ccbp.in/videos/${id}`
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
              
              console.log(data)
              const updatedParticularVideosData = this.getFormattedData(data.video_details)
              console.log(updatedParticularVideosData)
             this.setState({particluarVideo:updatedParticularVideosData,apiStatus:apiStatusConstants.success})
             
          }
        }
          catch  {
              this.setState({
                apiStatus: apiStatusConstants.failure,
              })
            }
    }
    renderParticularVideoView = () =>{
        const{particluarVideo,clickedLike,clcikedDislike,clickedSaved} = this.state
        const {published_at,thumbnail_url,subscriber_count,title,view_count,name,profile_image_url,id,video_url,description} = particluarVideo
        return(
            <>
            
            
            <div className="ParticularVideo-Conatiner">
              
            <div className="Particular-video">
            <ReactPlayer url={video_url} />
            </div>
            <div className="Particular-video-header">
                <div className="Particular-video-heading">
                    <h2>{title}</h2>
                    <div className="Particular-video-view-duration">
                        <div className="Particular-video-view">
                        <p>{view_count}</p>
                        <span>.</span>
                        <p>{published_at}</p>
                        </div>
                        <div className="Particular-video-icons">
                            <div className="like" onClick={this.OnclickedLike}>
                                {clickedLike ? <BiLike  color="blue" /> : <BiLike  />}
                                {clickedLike ? <p className="blue">Like</p> : <p>Like</p> } 
                            </div>
                            <div className="Dis-like" onClick={this.OnclickedDisLike}>
                                {clcikedDislike ? <BiDislike  color = "blue" /> :<BiDislike/>}
                                {clcikedDislike ? <p className="blue">Dislike</p> : <p className="blue-disLike">Dislike</p>}
                            </div>
                            <div className="Saved"  onClick={this.OnclickedSaved}>
                                {clickedSaved ?  <MdPlaylistAdd  color ="blue"/> : <MdPlaylistAdd /> }
                                {clickedSaved ? <p className="blue">Save</p> : <p className="blue-saved">Save</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="Particular-video-desc">
               
                    <div className="Particular-video-logo">
                        <div>
                        <img src={profile_image_url}alt="video-logo"/>
                        </div>
                    <div className="Particular-video-header">
                        <h3>{name}</h3>
                        <p>{subscriber_count}</p>
                        <div className="Particular-video-para">
                            <p>{description}</p>
                        </div>
                    </div>
                  </div>
                    
            </div>
        </div>
          
           </>
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