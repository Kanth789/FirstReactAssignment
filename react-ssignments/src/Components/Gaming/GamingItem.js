import './Gaming.css'
import { Link } from "react-router-dom";
const GamingItem = (props) =>{
    const{GamingDetails} = props
    const{id,thumbnail_url,view_count,title} = GamingDetails
    return(
        <Link to={`/videos/${id}`} className="nav-link">
        <div className="Game-card">
            <div className="Game-card-img">
                <img src={thumbnail_url} alt="Game-card-img"/>
            </div>
            <div className="Game-card-content">
                <h2>{title}</h2>
                <div className="Game-card-view">
                    <p>{view_count} Watching WorldWide</p>
                    
                </div>
            </div>
        </div>
        </Link>
    )
}

export default GamingItem