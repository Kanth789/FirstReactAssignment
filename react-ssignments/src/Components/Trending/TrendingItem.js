import './Trending.css'
import { Link } from "react-router-dom";
const TrendingItem = (props) =>{
    const {TrendingDetails} = props
    const {published_at,thumbnail_url,title,view_count,name,profile_image_url,id} = TrendingDetails
    return(
        <Link to={`/videos/${id}`} className="nav-link">
        <div className="Trending-card">
        <div className="Trending-card-video-img">
            <img src={thumbnail_url} alt="Trending-card-thumbnail"/>
        </div>
        <div className="Trending-card-content">
            <div className="Trending-card-header">
                <h2></h2>
                <h2>{title}</h2>
                <p>{name}</p>
                <div className="Trending-card-views">
                    <p>{view_count}</p>
                    <span>.</span>
                    <p>{published_at}</p>
                </div>
            </div>
        </div>
    </div>
    </Link>
    )
}
export default TrendingItem