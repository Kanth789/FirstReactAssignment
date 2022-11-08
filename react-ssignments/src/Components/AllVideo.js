import './AllVideos.css'
import { Link } from "react-router-dom";
const AllVideo = (props) =>{
    const{VideosList,OnclickedCardHome} = props
    const {published_at,thumbnail_url,title,view_count,name,profile_image_url,id} = VideosList
    const OnclickedCard = () =>{
        OnclickedCardHome(id)
    }
    return(
        <Link to={`/videos/${id}`} className="nav-link">
            <div className="video-card" onClick={OnclickedCard}>
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
        </Link>
    )
}

export default AllVideo