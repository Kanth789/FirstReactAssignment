import './AllVideos.css'
const AllVideo = (props) =>{
    const{VideosList} = props
    const {published_at,thumbnail_url,title,view_count,name,profile_image_url,id} = VideosList
    return(
        
            <div className="video-card">
                <div className="video">
                    <img src={thumbnail_url} alt="video-img"/>
                </div>
                <div className="video-content">
                    <div className="video-logo">
                        <img src={profile_image_url} alt="video-logo"/>
                    </div>
                    <div className="video-header">
                        <h3>{title}</h3>
                        <p>{name}</p>
                        <div className="video-views">
                            <p>{view_count}</p>
                            <span className="dot-span">.</span>
                            <p>{published_at}</p>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default AllVideo